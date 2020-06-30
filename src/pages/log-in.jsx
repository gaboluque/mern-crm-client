import React from 'react';
import makeMutation from '../hooks/makeMutation';
import LogIn from '../presenters/Auth/LogIn';
import { LOG_IN_MUTATION } from '../queries/userQueries';
import { HOME_PATH } from '../routing/paths';

const LogInContainer = () => {
  const { callMutation, message } = makeMutation(LOG_IN_MUTATION);

  const submitLogIn = async (input) => {
    await callMutation({
      formValues: { input },
      path: HOME_PATH,
      callback: ({ authUser: { token, user } }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      },
    });
  };

  return <LogIn message={message} submitLogIn={submitLogIn} />;
};

LogInContainer.propTypes = {};

export default LogInContainer;
