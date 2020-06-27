import { string } from 'prop-types';
import React from 'react';

const AuthSubmitButton = ({ title }) => {
  return (
    <input
      value={title}
      type="submit"
      className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
    />
  );
};

AuthSubmitButton.propTypes = {
  title: string.isRequired,
};

export default AuthSubmitButton;
