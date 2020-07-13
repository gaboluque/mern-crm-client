import { arrayOf, func, object } from 'prop-types';
import React from 'react';
import Table from '../../components/Layout/Table/Table';
import Button from '../../components/Layout/Buttons/Button';

const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Qty',
    key: 'quantity',
  },
  {
    title: 'Price',
    key: 'price',
    render: (price) => `$${price}`,
  },
];

const statusClasses = {
  PENDING: 'border-yellow-500',
  COMPLETED: 'border-green-500',
  CANCELED: 'border-red-500',
};

const OrderItem = ({
  item: { client, status, order, total },
  updateStatus,
  deleteOrder,
}) => {
  return (
    <div
      className={`bg-white mt-4 rounded p-6 shadow-lg ${statusClasses[status]} border-l-4`}
    >
      <div className="md:grid md:grid-cols-2 md:gap-4 mb-4">
        <div>
          <p className="font-bold text-gray-700">{`${client.name} ${client.lastName}`}</p>
          <p className="flex items-center my-1">
            <svg
              className="w-4 h-4 mr-2 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{client.email}</span>
          </p>
          <p className="flex items-center my-1">
            <svg
              className="w-4 h-4 mr-2 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 
              1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 
              011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span>{client.phone}</span>
          </p>
          <h2 className="text-gray-800 font-bold mt-10">Status: </h2>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => updateStatus(e.target.value)}
            className="mt-2 appearance-none bg-blue-600 border border-blue-600
             text-white p-2 text-center rounded leading-tight focus:outline-none 
             focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold"
          >
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELED">CANCELED</option>
            <option value="PENDING">PENDING</option>
          </select>
          <Button type="danger" className="mt-3" onClick={deleteOrder}>
            Delete Order
          </Button>
        </div>
        <div>
          <h2 className="text-gray-800 font-bold ">
            Total:
            <span>{` $ ${total}`}</span>
          </h2>
          <div>
            <h2 className="text-gray-800 font-bold">Summary</h2>
            <Table dataSource={order} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  item: object.isRequired,
  updateStatus: func.isRequired,
  deleteOrder: func.isRequired,
};

const OrdersList = ({ orders, updateStatus, deleteOrder }) => {
  return orders.map((item) => (
    <OrderItem
      deleteOrder={() => deleteOrder(item.id)}
      updateStatus={updateStatus(item.id)}
      key={item.id}
      item={item}
    />
  ));
};

OrdersList.propTypes = {
  orders: arrayOf(object).isRequired,
  updateStatus: func.isRequired,
  deleteOrder: func.isRequired,
};

export default OrdersList;
