import { bool } from 'prop-types';
import React from 'react';
import Input from '../../components/Form/Input';
import SubmitButton from '../../components/Form/SubmitButton';
import validateInput, {
  positive,
  required,
} from '../../components/Form/validations';

const newProductForm = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: "Product's name",
    validate: validateInput([required]),
  },
  {
    name: 'stock',
    type: 'number',
    label: 'Stock',
    placeholder: "Product's initial stock",
    validate: validateInput([required, positive]),
  },
  {
    name: 'price',
    type: 'number',
    label: 'Price',
    placeholder: "Product's price",
    validate: validateInput([required, positive]),
  },
];

const ProductForm = ({ loading }) => {
  return (
    <div className="product-form">
      {newProductForm.map((formItem) => (
        <Input key={formItem.name} {...formItem} />
      ))}
      <SubmitButton disabled={loading} title="Save product" />
    </div>
  );
};

ProductForm.propTypes = {
  loading: bool,
};

ProductForm.defaultProps = {
  loading: false,
};

export default ProductForm;
