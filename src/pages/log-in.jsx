import { gql } from '@apollo/client';
import React from 'react';
import AuthLayout from '../components/Auth/AuthFormLayout';
import AuthInput from '../components/Form/AuthInput';
import AuthSubmitButton from '../components/Form/AuthSubmitButton';
import Form from '../components/Form/Form';
import validate, { email, required } from '../components/Form/validations';
import makeMutation from '../hooks/makeMutation';
import { HOME_PATH } from '../routing/paths';

const LOG_IN_MUTATION = gql`
  mutation authUser($input: AuthInput) {
    authUser(input: $input) {
      token
    }
  }
`;

const logInForm = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: "User's email",
    validate: validate([required, email]),
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: "User's password",
    validate: validate([required]),
  },
];

const initialValues = {
  email: '',
  password: '',
};

const LogIn = () => {
  const { callMutation, message } = makeMutation(LOG_IN_MUTATION);

  const submitLogIn = async (formValues) => {
    await callMutation({
      formValues,
      path: HOME_PATH,
      callback: ({ authUser: { token } }) =>
        localStorage.setItem('token', token),
    });
  };

  return (
    <AuthLayout title="Log In" message={message}>
      <Form initialValues={initialValues} onSubmit={submitLogIn}>
        <div className="log-in-form">
          {logInForm.map((formItem) => (
            <AuthInput key={formItem.name} {...formItem} />
          ))}
          <AuthSubmitButton title="Log In" />
        </div>
      </Form>
    </AuthLayout>
  );
};

LogIn.propTypes = {};

export default LogIn;
