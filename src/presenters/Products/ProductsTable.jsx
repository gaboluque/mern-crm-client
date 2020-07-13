import { arrayOf, func, object } from 'prop-types';
import React from 'react';
import Table from '../../components/Layout/Table/Table';
import Button from '../../components/Layout/Buttons/Button';

const ProductsTable = ({ products, deleteProduct, openProduct }) => {
  const columns = [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Stock',
      key: 'stock',
    },
    {
      title: 'Price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Actions',
      key: 'id',
      className: 'flex justify-center items-center',
      render: (id) => (
        <>
          <Button
            onClick={() => deleteProduct(id)}
            type="danger"
            className="mx-1"
            icon="trash"
          />
          <Button
            onClick={() => openProduct(id)}
            type="primary"
            className="mx-1"
            icon="eye"
          />
        </>
      ),
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

ProductsTable.propTypes = {
  products: arrayOf(object).isRequired,
  deleteProduct: func.isRequired,
  openProduct: func.isRequired,
};

export default ProductsTable;
