import React from 'react';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import makeMutation from '../../hooks/makeMutation';
import ProductForm from '../../presenters/Products/ProductForm';
import {
  GET_PRODUCTS_QUERY,
  NEW_PRODUCT_MUTATION,
} from '../../queries/productQueries';
import { PRODUCTS_PATH } from '../../routing/paths';

const initialValues = {
  name: '',
  stock: '',
  price: '',
};

const cacheUpdate = {
  updateAction: 'newProduct',
  queryToUpdate: 'getProducts',
  query: GET_PRODUCTS_QUERY,
};

const NewProductContainer = () => {
  const { callMutation, loading, message } = makeMutation(
    NEW_PRODUCT_MUTATION,
    cacheUpdate
  );

  const submitNewProduct = async (input) => {
    callMutation({
      formValues: { input },
      path: PRODUCTS_PATH,
      successMessage: 'Producte creado correctamente',
    });
  };

  return (
    <>
      <h1>New Product</h1>
      <FormLayout message={message}>
        <Form initialValues={initialValues} onSubmit={submitNewProduct}>
          <ProductForm loading={loading} />
        </Form>
      </FormLayout>
    </>
  );
};

NewProductContainer.propTypes = {};

export default NewProductContainer;
