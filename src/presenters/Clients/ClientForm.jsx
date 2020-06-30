import React from 'react';
import { bool } from 'prop-types';
import Input from '../../components/Form/Input';
import SubmitButton from '../../components/Form/SubmitButton';
import validateInput, { required, email } from '../../components/Form/validations';

const newClientForm = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: "Client's name",
    validate: validateInput([required]),
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last name',
    placeholder: "Client's last name",
    validate: validateInput([required]),
  },
  {
    name: 'company',
    type: 'text',
    label: 'Company',
    placeholder: "Client's company",
    validate: validateInput([required]),
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: "Client's email",
    validate: validateInput([required, email]),
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Phone',
    placeholder: "Client's phone",
    validate: validateInput([required]),
  },
];

const ClientForm = ({ loading }) => {
  return (
    <div className="client-form">
      {newClientForm.map((formItem) => (
        <Input key={formItem.name} {...formItem} />
      ))}
      <SubmitButton disabled={loading} title="Save client" />
    </div>
  );
};

ClientForm.propTypes = {
  loading: bool,
};

ClientForm.defaultProps = {
  loading: false,
};

export default ClientForm;
