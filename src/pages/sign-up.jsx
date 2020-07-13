import React from 'react';
import makeMutation from '../hooks/makeMutation';
import SignUp from '../presenters/Auth/SignUp';
import { SIGN_UP_MUTATION } from '../queries/userQueries';
import { LOG_IN_PATH } from '../routing/paths';

const SignUpContainer = () => {
  const { callMutation, message } = makeMutation(SIGN_UP_MUTATION);

  const submitSignUp = async (input) => {
    callMutation({
      formValues: { input },
      path: LOG_IN_PATH,
      successMessage: 'Usuario creado correctamente',
    });
  };

  return <SignUp message={message} submitSignUp={submitSignUp} />;
};

SignUpContainer.propTypes = {};

export default SignUpContainer;
