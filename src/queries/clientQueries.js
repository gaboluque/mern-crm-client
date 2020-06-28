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

const GET_SELLER_CLIENTS_QUERY = gql`
  query getSellerClients {
    getSellerClients {
      name
      lastName
      company
      email
    }
  }
`;

export { NEW_CLIENT_MUTATION, GET_SELLER_CLIENTS_QUERY };
