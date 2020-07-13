import { useField } from 'formik';
import { oneOf, string, func } from 'prop-types';
import React from 'react';
import Select from 'react-select';

const DefaultInput = (props) => <input {...props} />;

const getComponent = (type) => {
  switch (type) {
    case 'select':
      return Select;
    default:
      return DefaultInput;
  }
};

const Input = ({ label, type, placeholder, validate, ...rest }) => {
  const [field, { error, touched }, { setValue }] = useField({
    ...rest,
    validate,
  });
  const hasError = error && touched;

  const newField = { ...field };
  if (type === 'select') {
    newField.onChange = setValue;
    newField.value = rest.options
      ? rest.options.find((option) => option.value === field.value)
      : '';
  }

  const Component = getComponent(type);

  return (
    <div className="mb-6">
      <label
        htmlFor={field.name}
        className="block text-gray text-sm font-bold mb-1"
      >
        {label}
        <Component
          type={type}
          id={field.name}
          placeholder={placeholder}
          className={`shadow appearance-none
          border ${hasError ? 'border-red-700' : ''} 
          ${type === 'select' ? '' : 'py-2 px-3 h-36px'} 
          rounded w-full text-gray-700
          leading-tight focus:outline-none 
          focus:shadow-outline`}
          {...newField}
          {...rest}
        />
      </label>
      <p className="text-red-700 text-xs absolute">{hasError ? error : ''}</p>
    </div>
  );
};

Input.propTypes = {
  label: string.isRequired,
  type: oneOf(['email', 'password', 'text', 'number', 'tel', 'select'])
    .isRequired,
  placeholder: string.isRequired,
  validate: func,
};

Input.defaultProps = {
  validate: null,
};

export default Input;
