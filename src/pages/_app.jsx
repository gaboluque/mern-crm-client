import { ApolloProvider } from '@apollo/client';
import { any, object } from 'prop-types';
import React from 'react';
import client from '../config/apollo';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

MyApp.propTypes = {
  Component: any.isRequired,
  pageProps: object.isRequired,
};

export default MyApp;
