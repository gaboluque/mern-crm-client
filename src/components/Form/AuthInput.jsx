import { useField } from 'formik';
import { oneOf, string } from 'prop-types';
import React from 'react';

const AuthInput = ({ label, type, placeholder, ...rest }) => {
  const [field, { error, touched }] = useField(rest);
  const hasError = error && touched;
  return (
    <div className="mb-6">
      <label
        htmlFor={field.name}
        className="block text-gray text-sm font-bold mb-1"
      >
        {label}
        <input
          type={type}
          id={field.name}
          placeholder={placeholder}
          className={`shadow appearance-none mt-1 
          border ${hasError ? 'border-red-700' : ''} 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none 
          focus:shadow-outline`}
          {...field}
        />
      </label>
      <p className="text-red-700 text-xs absolute">{hasError ? error : ''}</p>
    </div>
  );
};

AuthInput.propTypes = {
  label: string.isRequired,
  type: oneOf(['email', 'password', 'text']).isRequired,
  placeholder: string.isRequired,
};

export default AuthInput;
