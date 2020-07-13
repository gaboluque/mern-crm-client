import { FieldArray, withFormik } from 'formik';
import { arrayOf, bool, object, func } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Input from '../../components/Form/Input';
import SubmitButton from '../../components/Form/SubmitButton';
import validateInput, {
  positive,
  required,
} from '../../components/Form/validations';
import Button from '../../components/Layout/Buttons/Button';
import { currencyFormat } from '../../components/Form/format';

const getOrderTotal = (order) =>
  order.reduce(
    (sum, current) => sum + current.product.price * current.quantity,
    0
  );

const orderInputCreator = (values, products) => ({ push, remove }) => {
  const newProduct = { product: { price: 0 }, quantity: 1 };

  return (
    <div>
      {values.order &&
        values.order.map((product, index) => {
          const productInput = {
            name: `order.${index}.product`,
            inputId: `order.${index}.product`,
            type: 'select',
            label: '',
            placeholder: 'Add product to the order',
            options: products,
            getOptionValue: (o) => o.id,
            getOptionLabel: (o) =>
              o.name ? `${o.name} - ${currencyFormat(o.price)}` : '',
            validate: validateInput([required]),
          };
          const quantityInput = {
            name: `order.${index}.quantity`,
            type: 'number',
            label: '',
            min: 1,
            placeholder: '',
            validate: validateInput([required, positive]),
          };
          return (
            <div key={productInput.name} className="flex">
              <div className="w-4/6 mx-2">
                <Input key={productInput.name} {...productInput} />
              </div>
              <div className="w-1/6 mx-2">
                <Input key={quantityInput.name} {...quantityInput} />
              </div>
              <div className="w-1/6 mx-2">
                <Button onClick={() => remove(index)}>-</Button>
              </div>
            </div>
          );
        })}
      <Button onClick={() => push(newProduct)}>Add product</Button>
    </div>
  );
};

const OrderForm = ({ loading, clients, products, values, handleSubmit }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const newOrderForm = [
    {
      name: 'client',
      inputId: 'client',
      type: 'select',
      label: 'Client',
      placeholder: "Order's client",
      options: clients,
      getOptionValue: (o) => o.id,
      getOptionLabel: (o) => `${o.name} ${o.lastName}`,
      validate: validateInput([required]),
    },
  ];

  useEffect(() => {
    if (values.order) {
      const total = getOrderTotal(values.order);
      setTotalAmount(total);
    }
  }, [values]);

  return (
    <form onSubmit={handleSubmit} className="order-form">
      {newOrderForm.map((formItem) => (
        <Input key={formItem.name} {...formItem} />
      ))}
      <h3 className="block text-gray text-sm font-bold mb-1">
        Products
        <span className="float-right">
          Total:
          {currencyFormat(totalAmount)}
        </span>
      </h3>
      <FieldArray name="order" render={orderInputCreator(values, products)} />
      <SubmitButton disabled={loading} title="Save order" />
    </form>
  );
};

OrderForm.propTypes = {
  loading: bool,
  clients: arrayOf(object).isRequired,
  products: arrayOf(object).isRequired,
  values: object.isRequired,
  handleSubmit: func.isRequired,
};

OrderForm.defaultProps = {
  loading: false,
};

const mapPropsToValues = () => ({});

const handleSubmit = (values, { props: { onSubmit } }) => {
  const total = getOrderTotal(values.order);
  const order = values.order.map(
    ({ quantity, product: { id, name, price } }) => ({
      id,
      name,
      price,
      quantity,
    })
  );
  const client = values.client.id;
  onSubmit({ client, order, total });
};

export default withFormik({
  mapPropsToValues,
  displayName: 'OrderForm',
  handleSubmit,
})(OrderForm);
