import Head from 'next/head';
import { useRouter } from 'next/router';
import { node } from 'prop-types';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import routes from '../../routing/routes';
import Sidebar from './Sidebar';
import { NOT_FOUND_PATH } from '../../routing/paths';

const getRoute = (pathname) => {
  const route = routes.find(
    (r) => r.path === pathname || r.title === 'Not Found'
  );
  return route;
};

const Layout = ({ children }) => {
  const { pathname, push } = useRouter();
  const [route, setRoute] = useState(getRoute(pathname));
  const { auth } = useAuth(route.path);

  useEffect(() => {
    const abortController = new AbortController();

    const newRoute = getRoute(pathname);
    setRoute(newRoute);

    return () => {
      abortController.abort();
    };
  }, [pathname]);

  useEffect(() => {
    if (route.path === NOT_FOUND_PATH) {
      push(NOT_FOUND_PATH);
    }
  }, [route]);

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
            <Sidebar pathname={pathname} auth={auth} />
            <main className="sm:w-3/4 xl:w-5/6 sm:min-h-screen p-5">
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
