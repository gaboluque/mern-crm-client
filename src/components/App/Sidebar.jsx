/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';

const Sidebar = ({ pathname }) => {
  const menuItem = (path, title) => (
    <li className={pathname === path ? 'bg-blue-800' : ''}>
      <Link href={path}>
        <a className="text-white mb-2 block p-3">{title}</a>
      </Link>
    </li>
  );

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">CRM Clients</p>
      </div>
      <nav className="mt-5 list-none">
        {menuItem('/', 'Home')}
        {menuItem('/clients', 'Clients')}
        {menuItem('/products', 'Products')}
        {menuItem('/orders', 'Orders')}
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  pathname: string.isRequired,
};

export default Sidebar;
