import { Formik } from 'formik';
import { func, node, object } from 'prop-types';
import React from 'react';

const Form = ({ initialValues, onSubmit, children }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
    </Formik>
  );
};

Form.propTypes = {
  initialValues: object,
  onSubmit: func.isRequired,
  children: node.isRequired,
};

Form.defaultProps = {
  initialValues: {},
};

export default Form;
