import { ApolloProvider } from '@apollo/client';
import { any, object } from 'prop-types';
import React from 'react';
import client from '../config/apollo';
import Layout from '../components/App/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

MyApp.propTypes = {
  Component: any.isRequired,
  pageProps: object.isRequired,
};

export default MyApp;
