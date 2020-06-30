import { useRouter } from 'next/router';
import React from 'react';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import Loader from '../../components/Layout/Feedback/Loader';
import makeMutation from '../../hooks/makeMutation';
import makeQuery from '../../hooks/makeQuery';
import ProductForm from '../../presenters/Products/ProductForm';
import {
  GET_PRODUCT_QUERY,
  UPDATE_PRODUCT_MUTATION,
} from '../../queries/productQueries';
import { PRODUCTS_PATH } from '../../routing/paths';

const ProductFormContainer = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = makeQuery(GET_PRODUCT_QUERY, { id }, { skip: !id });
  const { callMutation, loading: loadingSave } = makeMutation(
    UPDATE_PRODUCT_MUTATION
  );

  if (loading || !data) return <Loader />;

  const submitNewProduct = async ({ __typename, id: productId, ...input }) => {
    callMutation({
      formValues: { input, id },
      withAlert: true,
      path: PRODUCTS_PATH,
    });
  };

  return (
    <>
      <h1>Edit Product</h1>
      <FormLayout>
        <Form initialValues={data.getProduct} onSubmit={submitNewProduct}>
          <ProductForm loading={loadingSave} />
        </Form>
      </FormLayout>
    </>
  );
};

ProductFormContainer.propTypes = {};

export default ProductFormContainer;
