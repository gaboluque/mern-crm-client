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

export { LOG_IN_MUTATION, SIGN_UP_MUTATION };
