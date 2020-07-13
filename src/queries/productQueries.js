import { gql } from '@apollo/client';

const NEW_PRODUCT_MUTATION = gql`
  mutation newProduct($input: ProductInput) {
    newProduct(input: $input) {
      name
      stock
      price
      createdAt
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation updateProduct($id: ID!, $input: ProductInput) {
    updateProduct(id: $id, input: $input) {
      id
      name
      stock
      price
    }
  }
`;

const GET_PRODUCTS_QUERY = gql`
  query getProducts {
    getProducts {
      id
      name
      stock
      price
    }
  }
`;

const GET_PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      stock
      price
    }
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export {
  NEW_PRODUCT_MUTATION,
  GET_PRODUCTS_QUERY,
  DELETE_PRODUCT_MUTATION,
  GET_PRODUCT_QUERY,
  UPDATE_PRODUCT_MUTATION,
};
