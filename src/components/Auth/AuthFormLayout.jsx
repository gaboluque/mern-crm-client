import { node, string, object } from 'prop-types';
import React from 'react';
import Layout from '../App/Layout';

const AuthFormLayout = ({ title, message, children }) => {
  return (
    <Layout>
      {message && (
        <div
          className={`bg-${message.kind === 'ERROR' ? 'red' : 'green'}-700
          py-2 px-3 w-full my-3 max-w-sm text-center mx-auto`}
        >
          <p className="text-white">{message.message}</p>
        </div>
      )}
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
  message: object,
  children: node.isRequired,
};

AuthFormLayout.defaultProps = {
  message: null,
};

export default AuthFormLayout;
