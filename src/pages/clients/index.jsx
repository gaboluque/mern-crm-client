import Link from 'next/link';
import React from 'react';
import makeQuery from '../../hooks/makeQuery';
import { GET_SELLER_CLIENTS_QUERY } from '../../queries/clientQueries';
import { NEW_CLIENT_PATH } from '../../routing/paths';
import ClientsTable from '../../presenters/Clients/ClientsTable';
import Loader from '../../components/Layout/Feedback/Loader';
import LinkButton from '../../components/Layout/Buttons/LinkButton';

const Clients = () => {
  const { data, loading } = makeQuery(GET_SELLER_CLIENTS_QUERY);
  return (
    <div>
      <h1>Clients</h1>
      <LinkButton type="button" path={NEW_CLIENT_PATH} text="New Client" />
      {loading ? (
        <Loader />
      ) : (
        <ClientsTable clients={data ? data.getSellerClients : []} />
      )}
    </div>
  );
};

Clients.propTypes = {};

export default Clients;
