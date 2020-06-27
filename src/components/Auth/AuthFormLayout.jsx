import { node, string } from 'prop-types';
import React from 'react';
import Layout from '../App/Layout';

const AuthFormLayout = ({ title, children }) => {
  return (
    <Layout>
      <h1 className="text-center text-2xl text-white font-light">{title}</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

AuthFormLayout.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};

export default AuthFormLayout;
