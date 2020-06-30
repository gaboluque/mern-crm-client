import { arrayOf, object, func } from 'prop-types';
import React from 'react';
import Table from '../../components/Layout/Table/Table';

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
          <button
            onClick={() => deleteClient(id)}
            type="button"
            className="mx-1 flex justify-center items-center 
                bg-red-700 py-2 px-4 w-1/3 text-white rounded
                text-xs uppercase font-bold"
          >
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000
                     2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 
                     100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 
                     8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 
                     0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => openClient(id)}
            type="button"
            className="mx-1 flex justify-center items-center 
                bg-gray-700 py-2 px-4 w-1/3 text-white rounded
                text-xs uppercase font-bold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 
                    9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 
                    14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
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
