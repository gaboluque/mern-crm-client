import { useRouter } from 'next/router';
import React from 'react';
import LinkButton from '../../components/Layout/Buttons/LinkButton';
import Loader from '../../components/Layout/Feedback/Loader';
import { confirmAlert } from '../../components/Layout/Feedback/swalAlert';
import makeMutation from '../../hooks/makeMutation';
import makeQuery from '../../hooks/makeQuery';
import ClientsTable from '../../presenters/Clients/ClientsTable';
import {
  DELETE_CLIENT_MUTATION,
  GET_SELLER_CLIENTS_QUERY,
} from '../../queries/clientQueries';
import { NEW_CLIENT_PATH, SHOW_CLIENT_PATH } from '../../routing/paths';

const deleteUpdateCache = {
  updateAction: 'deleteClient',
  queryToUpdate: 'getSellerClients',
  query: GET_SELLER_CLIENTS_QUERY,
  action: 'delete',
};

const Clients = () => {
  const { push } = useRouter();
  const { data, loading } = makeQuery({ query: GET_SELLER_CLIENTS_QUERY });
  const { callMutation } = makeMutation(
    DELETE_CLIENT_MUTATION,
    deleteUpdateCache
  );

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Delete this client?',
      onConfirm: () => {
        callMutation({
          formValues: { id },
          withAlert: true,
          successMessage: 'Client deleted!',
        });
      },
    });
  };

  const openClient = (id) => {
    push({
      pathname: SHOW_CLIENT_PATH(id),
    });
  };

  return (
    <div>
      <h1>Clients</h1>
      <LinkButton
        className="mb-2"
        type="button"
        path={NEW_CLIENT_PATH}
        text="New Client"
      />
      {loading ? (
        <Loader />
      ) : (
        <ClientsTable
          deleteClient={confirmDelete}
          openClient={openClient}
          clients={data ? data.getSellerClients : []}
        />
      )}
    </div>
  );
};

Clients.propTypes = {};

export default Clients;
