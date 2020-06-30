import { func, string } from 'prop-types';
import React from 'react';
import Link from 'next/link';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import Input from '../../components/Form/Input';
import SubmitButton from '../../components/Form/SubmitButton';
import validateInput, { email, required } from '../../components/Form/validations';
import { SIGN_UP_PATH } from '../../routing/paths';
import LinkButton from '../../components/Layout/Buttons/LinkButton';

const logInForm = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: "User's email",
    validate: validateInput([required, email]),
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: "User's password",
    validate: validateInput([required]),
  },
];

const initialValues = {
  email: '',
  password: '',
};

const LogIn = ({ message, submitLogIn }) => {
  return (
    <FormLayout title="Log In" message={message}>
      <Form initialValues={initialValues} onSubmit={submitLogIn}>
        <div className="log-in-form">
          {logInForm.map((formItem) => (
            <Input key={formItem.name} {...formItem} />
          ))}
          <SubmitButton title="Log In" />
        </div>
      </Form>
      <LinkButton type="link" text="Sign up" path={SIGN_UP_PATH} />
    </FormLayout>
  );
};

LogIn.propTypes = {
  message: string,
  submitLogIn: func.isRequired,
};

LogIn.defaultProps = {
  message: '',
};

export default LogIn;
