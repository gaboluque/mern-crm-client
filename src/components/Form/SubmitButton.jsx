import { string, bool } from 'prop-types';
import React from 'react';

const SubmitButton = ({ title, disabled }) => {
  return (
    <input
      value={title}
      type="submit"
      disabled={disabled}
      className={`${disabled ? 'bg-gray-500' : 'bg-gray-800 hover:bg-gray-900'}
       w-full mt-5 p-2 text-white uppercase `}
    />
  );
};

SubmitButton.propTypes = {
  title: string.isRequired,
  disabled: bool,
};

SubmitButton.defaultProps = {
  disabled: false,
};

export default SubmitButton;
