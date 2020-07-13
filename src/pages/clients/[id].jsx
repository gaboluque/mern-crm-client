import { useRouter } from 'next/router';
import React from 'react';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import Loader from '../../components/Layout/Feedback/Loader';
import makeMutation from '../../hooks/makeMutation';
import makeQuery from '../../hooks/makeQuery';
import ClientForm from '../../presenters/Clients/ClientForm';
import {
  GET_CLIENT_QUERY,
  UPDATE_CLIENT_MUTATION,
} from '../../queries/clientQueries';
import { CLIENTS_PATH } from '../../routing/paths';

const ClientFormContainer = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = makeQuery({
    query: GET_CLIENT_QUERY,
    variables: { id },
    options: { skip: !id },
  });
  const { callMutation, loading: loadingSave } = makeMutation(
    UPDATE_CLIENT_MUTATION
  );

  if (loading || !data) return <Loader />;

  const submitNewClient = async ({ __typename, ...input }) => {
    callMutation({
      formValues: { input, id },
      withAlert: true,
      path: CLIENTS_PATH,
      successMessage: 'Client updated successfully',
    });
  };

  return (
    <>
      <h1>Edit Client</h1>
      <FormLayout>
        <Form initialValues={data.getClient} onSubmit={submitNewClient}>
          <ClientForm loading={loadingSave} />
        </Form>
      </FormLayout>
    </>
  );
};

ClientFormContainer.propTypes = {};

export default ClientFormContainer;
