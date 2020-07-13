import { useRouter } from 'next/router';
import React from 'react';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import Loader from '../../components/Layout/Feedback/Loader';
import makeMutation from '../../hooks/makeMutation';
import makeQuery from '../../hooks/makeQuery';
import OrderForm from '../../presenters/Orders/OrderForm';
import {
  GET_ORDER_QUERY,
  UPDATE_ORDER_MUTATION,
} from '../../queries/orderQueries';
import { ORDERS_PATH } from '../../routing/paths';

const OrderFormContainer = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = makeQuery({
    query: GET_ORDER_QUERY,
    variables: { id },
    options: { skip: !id },
  });
  const { callMutation, loading: loadingSave } = makeMutation(
    UPDATE_ORDER_MUTATION
  );

  if (loading || !data) return <Loader />;

  const submitNewOrder = async ({ __typename, id: orderId, ...input }) => {
    callMutation({
      formValues: { input, id },
      withAlert: true,
      path: ORDERS_PATH,
    });
  };

  return (
    <>
      <h1>Edit Order</h1>
      <FormLayout>
        <Form initialValues={data.getOrder} onSubmit={submitNewOrder}>
          <OrderForm loading={loadingSave} />
        </Form>
      </FormLayout>
    </>
  );
};

OrderFormContainer.propTypes = {};

export default OrderFormContainer;
