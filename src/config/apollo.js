import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
  fetch,
});

const getToken = () => {
  let token;
  if (typeof document !== 'undefined') {
    token = localStorage.getItem('token');
  }
  return token;
};

const authLink = setContext((_, { headers }) => {
  const newHeaders = { ...headers };
  const token = getToken();
  if (token) newHeaders.authorization = token;
  return {
    headers: newHeaders,
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default apolloClient;
