import React, { useEffect, useState } from 'react';
import FormLayout from '../../components/Form/FormLayout';
import Loader from '../../components/Layout/Feedback/Loader';
import makeQuery from '../../hooks/makeQuery';
import OrderForm from '../../presenters/Orders/OrderForm';
import { GET_SELLER_CLIENTS_QUERY } from '../../queries/clientQueries';
import { GET_PRODUCTS_QUERY } from '../../queries/productQueries';
import { ORDERS_PATH } from '../../routing/paths';
import makeMutation from '../../hooks/makeMutation';
import {
  NEW_ORDER_MUTATION,
  GET_ORDERS_QUERY,
} from '../../queries/orderQueries';

const cacheUpdate = {
  updateAction: 'newOrder',
  queryToUpdate: 'getSellerOrders',
  query: GET_ORDERS_QUERY,
  action: 'create',
};

const NewOrderContainer = () => {
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const { data: clientsData } = makeQuery({ query: GET_SELLER_CLIENTS_QUERY });
  const { data: productsData } = makeQuery({ query: GET_PRODUCTS_QUERY });
  const { callMutation } = makeMutation(NEW_ORDER_MUTATION, cacheUpdate);

  useEffect(() => {
    const abortController = new AbortController();
    if (clientsData && clientsData.getSellerClients) {
      setClients(clientsData.getSellerClients);
    }
    if (productsData && productsData.getProducts) {
      setProducts(productsData.getProducts);
    }
    return () => {
      abortController.abort();
    };
  }, [productsData, clientsData]);

  const submitNewOrder = async (input) => {
    callMutation({
      formValues: { input },
      path: ORDERS_PATH,
      successMessage: 'Order created successfully!',
      withAlert: true,
    });
  };

  return (
    <>
      <h1>New Order</h1>
      {clients && products ? (
        <FormLayout>
          <OrderForm
            onSubmit={submitNewOrder}
            products={products}
            clients={clients}
          />
        </FormLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};

NewOrderContainer.propTypes = {};

export default NewOrderContainer;
