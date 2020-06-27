import Head from 'next/head';
import { useRouter } from 'next/router';
import { node } from 'prop-types';
import React, { useEffect, useState } from 'react';
import routes from '../../routing/routes';
import Sidebar from './Sidebar';

const getRoute = (pathname) => routes.find((route) => route.path === pathname);

const Layout = ({ children }) => {
  const [route, setRoute] = useState(routes[0]);
  const router = useRouter();

  useEffect(() => {
    const newRoute = getRoute(router.pathname);
    setRoute(newRoute);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{`CRM - ${route.title}`}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      {route.private ? (
        <div className="bg-gray-200 min-h-screen">
          <div className="flex min-h-screen">
            <Sidebar pathname={router.pathname} />
            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
              {children}
            </main>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
