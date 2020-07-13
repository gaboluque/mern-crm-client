import { func, string } from 'prop-types';
import React from 'react';
import Form from '../../components/Form/Form';
import FormLayout from '../../components/Form/FormLayout';
import Input from '../../components/Form/Input';
import SubmitButton from '../../components/Form/SubmitButton';
import validateInput, {
  email,
  required,
} from '../../components/Form/validations';
import LinkButton from '../../components/Layout/Buttons/LinkButton';
import { LOG_IN_PATH } from '../../routing/paths';

const signUpForm = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: "User's name",
    validate: validateInput([required]),
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last name',
    placeholder: "User's last name",
    validate: validateInput([required]),
  },
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
  name: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUp = ({ message, submitSignUp }) => {
  return (
    <FormLayout title="Sign Up" message={message}>
      <Form initialValues={initialValues} onSubmit={submitSignUp}>
        <div className="sign-up-form">
          {signUpForm.map((formItem) => (
            <Input key={formItem.name} {...formItem} />
          ))}
          <SubmitButton title="Sign up" />
        </div>
      </Form>
      <LinkButton type="link" text="Log in" path={LOG_IN_PATH} />
    </FormLayout>
  );
};

SignUp.propTypes = {
  message: string,
  submitSignUp: func.isRequired,
};

SignUp.defaultProps = {
  message: '',
};

export default SignUp;
