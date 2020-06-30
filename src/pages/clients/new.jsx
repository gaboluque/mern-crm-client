import React from 'react';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import makeMutation from '../../hooks/makeMutation';
import ClientForm from '../../presenters/Clients/ClientForm';
import {
  GET_SELLER_CLIENTS_QUERY,
  NEW_CLIENT_MUTATION,
} from '../../queries/clientQueries';
import { CLIENTS_PATH } from '../../routing/paths';

const initialValues = {
  name: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
};

const cacheUpdate = {
  updateAction: 'newClient',
  queryToUpdate: 'getSellerClients',
  query: GET_SELLER_CLIENTS_QUERY,
};

const NewClientContainer = () => {
  const { callMutation, loading, message } = makeMutation(
    NEW_CLIENT_MUTATION,
    cacheUpdate
  );

  const submitNewClient = async (input) => {
    callMutation({
      formValues: { input },
      path: CLIENTS_PATH,
      successMessage: 'Cliente creado correctamente',
    });
  };

  return (
    <>
      <h1>New Client</h1>
      <FormLayout message={message}>
        <Form initialValues={initialValues} onSubmit={submitNewClient}>
          <ClientForm loading={loading} />
        </Form>
      </FormLayout>
    </>
  );
};

NewClientContainer.propTypes = {};

export default NewClientContainer;
