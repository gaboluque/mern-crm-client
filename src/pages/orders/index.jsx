import { useRouter } from 'next/router';
import React from 'react';
import LinkButton from '../../components/Layout/Buttons/LinkButton';
import Loader from '../../components/Layout/Feedback/Loader';
import makeQuery from '../../hooks/makeQuery';
import OrdersList from '../../presenters/Orders/OrdersList';
import {
  GET_ORDERS_QUERY,
  UPDATE_ORDER_MUTATION,
  DELETE_ORDER_QUERY,
} from '../../queries/orderQueries';
import { NEW_ORDER_PATH, SHOW_ORDER_PATH } from '../../routing/paths';
import makeMutation from '../../hooks/makeMutation';
import { confirmAlert } from '../../components/Layout/Feedback/swalAlert';

const updateUpdateCache = {
  updateAction: 'updateOrder',
  queryToUpdate: 'getSellerOrders',
  query: GET_ORDERS_QUERY,
  action: 'update',
};

const deleteUpdateCache = {
  updateAction: 'deleteOrder',
  queryToUpdate: 'getSellerOrders',
  query: GET_ORDERS_QUERY,
  action: 'delete',
};

const Orders = () => {
  const { push } = useRouter();
  const { data, loading } = makeQuery({ query: GET_ORDERS_QUERY });
  const { callMutation: updateOrder } = makeMutation(
    UPDATE_ORDER_MUTATION,
    updateUpdateCache
  );
  const { callMutation: deleteOrder } = makeMutation(
    DELETE_ORDER_QUERY,
    deleteUpdateCache
  );

  const openOrder = (id) => {
    push({
      pathname: SHOW_ORDER_PATH(id),
    });
  };

  const updateStatus = (id) => (status) => {
    updateOrder({ formValues: { id, input: { status } }, withAlert: true });
  };

  const confirmDeleteOrder = (id) => {
    confirmAlert({
      title: 'Delete this order?',
      onConfirm: () => {
        deleteOrder({
          formValues: { id },
          withAlert: true,
          successMessage: 'Order deleted!',
        });
      },
    });
  };

  return (
    <div>
      <h1>Orders</h1>
      <LinkButton type="button" path={NEW_ORDER_PATH} text="New Order" />
      {loading ? (
        <Loader />
      ) : (
        <OrdersList
          openOrder={openOrder}
          updateStatus={updateStatus}
          deleteOrder={confirmDeleteOrder}
          orders={data ? data.getSellerOrders : []}
        />
      )}
    </div>
  );
};

Orders.propTypes = {};

export default Orders;
