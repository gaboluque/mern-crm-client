import { useRouter } from 'next/router';
import React from 'react';
import LinkButton from '../../components/Layout/Buttons/LinkButton';
import Loader from '../../components/Layout/Feedback/Loader';
import { confirmAlert } from '../../components/Layout/Feedback/swalAlert';
import makeMutation from '../../hooks/makeMutation';
import makeQuery from '../../hooks/makeQuery';
import ProductsTable from '../../presenters/Products/ProductsTable';
import {
  DELETE_PRODUCT_MUTATION,
  GET_PRODUCTS_QUERY,
} from '../../queries/productQueries';
import { NEW_PRODUCT_PATH, SHOW_PRODUCT_PATH } from '../../routing/paths';

const deleteUpdateCache = {
  updateAction: 'deleteProduct',
  queryToUpdate: 'getProducts',
  query: GET_PRODUCTS_QUERY,
  action: 'delete',
};

const Products = () => {
  const { push } = useRouter();
  const { data, loading } = makeQuery({ query: GET_PRODUCTS_QUERY });
  const { callMutation } = makeMutation(
    DELETE_PRODUCT_MUTATION,
    deleteUpdateCache
  );

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Delete this product?',
      onConfirm: () => {
        callMutation({
          formValues: { id },
          withAlert: true,
          successMessage: 'Product deleted!',
        });
      },
    });
  };

  const openProduct = (id) => {
    push({
      pathname: SHOW_PRODUCT_PATH(id),
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <LinkButton
        className="mb-2"
        type="button"
        path={NEW_PRODUCT_PATH}
        text="New Product"
      />
      {loading ? (
        <Loader />
      ) : (
        <ProductsTable
          deleteProduct={confirmDelete}
          openProduct={openProduct}
          products={data ? data.getProducts : []}
        />
      )}
    </div>
  );
};

Products.propTypes = {};

export default Products;
