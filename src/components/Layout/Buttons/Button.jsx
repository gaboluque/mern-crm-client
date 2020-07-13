import { string, bool, func, oneOf } from 'prop-types';
import React from 'react';

const buttonIcons = {
  trash: (
    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000
         2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 
         100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 
         8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 
         0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  eye: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 
                    9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 
                    14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const getButtonClasses = (type) => {
  let classes = '';
  switch (type) {
    case 'danger': {
      classes += 'bg-red-700 hover:bg-red-800';
      break;
    }
    default:
    case 'primary': {
      classes += 'bg-gray-800 hover:bg-gray-900';
      break;
    }
  }

  return `
    ${classes} 
    flex justify-center items-center text-white rounded text-xs uppercase font-bold
    px-3 py-2
  `;
};

const Button = ({ children, disabled, className, onClick, type, icon }) => {
  const classes = getButtonClasses(type);

  const iconRender = buttonIcons[icon] || null;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? 'bg-gray-500' : ''} ${classes} ${className}`}
    >
      {iconRender}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: string,
  className: string,
  onClick: func.isRequired,
  type: oneOf(['primary', 'secondary', 'danger']),
  icon: oneOf(['trash', 'eye']),
  disabled: bool,
};

Button.defaultProps = {
  disabled: false,
  type: 'primary',
  className: '',
  icon: null,
  children: null,
};

export default Button;
