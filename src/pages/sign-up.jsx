import { gql } from '@apollo/client';
import React from 'react';
import AuthLayout from '../components/Auth/AuthFormLayout';
import AuthInput from '../components/Form/AuthInput';
import AuthSubmitButton from '../components/Form/AuthSubmitButton';
import Form from '../components/Form/Form';
import validate, { email, required } from '../components/Form/validations';
import makeMutation from '../hooks/makeMutation';
import { LOG_IN_PATH } from '../routing/paths';

const SIGN_UP_MUTATION = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastName
      email
    }
  }
`;

const signUpForm = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: "User's name",
    validate: validate([required]),
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last name',
    placeholder: "User's last name",
    validate: validate([required]),
  },
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
  name: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const { callMutation, message } = makeMutation(SIGN_UP_MUTATION);

  const submitSignUp = async (formValues) => {
    callMutation({
      formValues,
      path: LOG_IN_PATH,
      successMessage: 'Usuario creado correctamente',
    });
  };

  return (
    <AuthLayout title="Sign Up" message={message}>
      <Form initialValues={initialValues} onSubmit={submitSignUp}>
        <div className="sign-up-form">
          {signUpForm.map((formItem) => (
            <AuthInput key={formItem.name} {...formItem} />
          ))}
          <AuthSubmitButton title="Sign up" />
        </div>
      </Form>
    </AuthLayout>
  );
};

SignUp.propTypes = {};

export default SignUp;
