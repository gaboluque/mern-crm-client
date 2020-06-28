import { arrayOf, object } from 'prop-types';
import React from 'react';

const ClientsTable = ({ clients }) => {
  return (
    <table className="table-auto shadow-md mt-10 w-ful w-lg">
      <thead className="bg-gray-800">
        <tr className="text-white">
          <th className="w-1/5 py-2">Name</th>
          <th className="w-1/5 py-2">Company</th>
          <th className="w-1/5 py-2">Email</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {clients.map((client) => (
          <tr key={client.email} className="hover:bg-gray-200">
            <td className="border px-4 py-2">{`${client.name} ${client.lastName}`}</td>
            <td className="border px-4 py-2">{client.company}</td>
            <td className="border px-4 py-2">{client.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ClientsTable.propTypes = {
  clients: arrayOf(object).isRequired,
};

export default ClientsTable;
