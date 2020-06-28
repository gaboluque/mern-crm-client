import { string, oneOf } from 'prop-types';
import React from 'react';
import Link from 'next/link';

const getStyles = (type) => {
  switch (type) {
    case 'link':
      return 'text-gray-700 text-center mb-2 block p-3';
    case 'button':
    default:
      return 'bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800';
  }
};

const LinkButton = ({ text, path, type }) => {
  const styles = getStyles(type);
  return (
    <Link href={path}>
      <a className={styles}>{text}</a>
    </Link>
  );
};

LinkButton.propTypes = {
  text: string.isRequired,
  path: string.isRequired,
  type: oneOf(['link', 'button']),
};

LinkButton.defaultProps = {
  type: 'link',
};

export default LinkButton;
