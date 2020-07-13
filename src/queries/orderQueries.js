import { gql } from '@apollo/client';

const NEW_ORDER_MUTATION = gql`
  mutation newOrder($input: OrderInput) {
    newOrder(input: $input) {
      id
      order {
        id
        name
        quantity
        price
      }
      total
      client {
        name
        lastName
        email
        phone
      }
      status
      createdAt
    }
  }
`;

const UPDATE_ORDER_MUTATION = gql`
  mutation updateOrder($id: ID!, $input: OrderInput) {
    updateOrder(id: $id, input: $input) {
      id
      order {
        id
        name
        quantity
        price
      }
      total
      client {
        name
        lastName
        email
        phone
      }
      status
      createdAt
    }
  }
`;

const DELETE_ORDER_QUERY = gql`
  mutation deleteOrder($id: ID!) {
    deleteOrder(id: $id) {
      id
    }
  }
`;

const GET_ORDERS_QUERY = gql`
  query getSellerOrders {
    getSellerOrders {
      id
      order {
        id
        name
        quantity
        price
      }
      total
      client {
        name
        lastName
        email
        phone
      }
      status
      createdAt
    }
  }
`;

const GET_ORDER_QUERY = gql`
  query getOrder($id: ID!) {
    getOrder(id: $id) {
      id
      name
      stock
      price
    }
  }
`;

export {
  NEW_ORDER_MUTATION,
  GET_ORDERS_QUERY,
  GET_ORDER_QUERY,
  UPDATE_ORDER_MUTATION,
  DELETE_ORDER_QUERY,
};
