import React from 'react';
import AuthLayout from '../components/Auth/AuthFormLayout';
import AuthInput from '../components/Form/AuthInput';
import AuthSubmitButton from '../components/Form/AuthSubmitButton';

const SignUp = () => (
  <AuthLayout title="Log In">
    <div className="log-in-form">
      <AuthInput
        type="email"
        name="email"
        label="Email"
        placeholder="User Email"
      />
      <AuthInput
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <AuthSubmitButton title="Log In" />
    </div>
  </AuthLayout>
);

SignUp.propTypes = {};

export default SignUp;
