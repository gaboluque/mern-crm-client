import { gql } from '@apollo/client';

const NEW_CLIENT_MUTATION = gql`
  mutation newClient($input: ClientInput) {
    newClient(input: $input) {
      id
      name
      lastName
      company
      email
      phone
      seller
    }
  }
`;

const UPDATE_CLIENT_MUTATION = gql`
  mutation updateClient($id: ID!, $input: ClientInput) {
    updateClient(id: $id, input: $input) {
      id
      name
      lastName
      company
      email
      phone
      seller
    }
  }
`;

const GET_SELLER_CLIENTS_QUERY = gql`
  query getSellerClients {
    getSellerClients {
      id
      name
      lastName
      company
      email
      phone
      seller
    }
  }
`;

const GET_CLIENT_QUERY = gql`
  query getClient($id: ID!) {
    getClient(id: $id) {
      name
      lastName
      email
      company
      phone
    }
  }
`;

const DELETE_CLIENT_MUTATION = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

export {
  NEW_CLIENT_MUTATION,
  GET_SELLER_CLIENTS_QUERY,
  DELETE_CLIENT_MUTATION,
  GET_CLIENT_QUERY,
  UPDATE_CLIENT_MUTATION,
};
