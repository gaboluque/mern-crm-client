import { gql } from '@apollo/client';

const LOG_IN_MUTATION = gql`
  mutation authUser($input: AuthInput) {
    authUser(input: $input) {
      token
      user {
        id
        name
        lastName
        email
      }
    }
  }
`;

const SIGN_UP_MUTATION = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastName
      email
    }
  }
`;

const GET_DASHBOARD_QUERY = gql`
  query getDashboard {
    getBestClients {
      client {
        name
        company
      }
      total
    }
    getBestSellers {
      seller {
        name
      }
      total
    }
  }
`;

export { LOG_IN_MUTATION, SIGN_UP_MUTATION, GET_DASHBOARD_QUERY };
