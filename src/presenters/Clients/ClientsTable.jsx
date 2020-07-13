import { arrayOf, object, func } from 'prop-types';
import React from 'react';
import Table from '../../components/Layout/Table/Table';
import Button from '../../components/Layout/Buttons/Button';

const ClientsTable = ({ clients, deleteClient, openClient }) => {
  const columns = [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Company',
      key: 'company',
    },
    {
      title: 'Email',
      key: 'email',
    },
    {
      title: 'Actions',
      className: 'flex justify-center items-center',
      key: 'id',
      render: (id) => (
        <>
          <Button
            onClick={() => deleteClient(id)}
            type="danger"
            icon="trash"
            className="mx-1"
          />
          <Button
            onClick={() => openClient(id)}
            type="primary"
            icon="eye"
            className="mx-1"
          />
        </>
      ),
    },
  ];
  return <Table dataSource={clients} columns={columns} />;
};

ClientsTable.propTypes = {
  clients: arrayOf(object).isRequired,
  deleteClient: func.isRequired,
  openClient: func.isRequired,
};

export default ClientsTable;
