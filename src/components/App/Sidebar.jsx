/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { string, object } from 'prop-types';

const Sidebar = ({ pathname, auth }) => {
  const menuItem = (path, title) => (
    <li className={pathname === path ? 'bg-blue-800' : ''}>
      <Link href={path}>
        <a className="text-white mb-2 block p-3">{title}</a>
      </Link>
    </li>
  );

  return (
    <aside className="bg-gray-800 sm:w-1/5 xl:w-1/6 sm:min-h-screen">
      <div className="p-5">
        <p className="text-white text-2xl font-black">CRM Clients</p>
      </div>
      <nav className="mt-5 list-none">
        {menuItem('/', 'Home')}
        {menuItem('/clients', 'Clients')}
        {menuItem('/products', 'Products')}
        {menuItem('/orders', 'Orders')}
        <li className="sm:absolute sm:w-1/5 xl:w-1/6 bottom-0 bg-blue-800 h-16 text-white p-5">
          {`${auth.name} ${auth.lastName}`}
        </li>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  pathname: string.isRequired,
  auth: object,
};

Sidebar.defaultProps = {
  auth: {
    name: '',
    lastName: '',
  },
};

export default Sidebar;
