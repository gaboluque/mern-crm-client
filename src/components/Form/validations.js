const required = (value) => (value ? undefined : 'Required field');
const positive = (value) => (value > 0 ? undefined : 'Must be greater than 0');
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : null;

const validateInput = (validations) => (value) => {
  let response;
  for (let i = 0; i < validations.length; i += 1) {
    response = validations[i](value);
    if (response) {
      break;
    }
  }
  return response;
};

export { required, email, positive };

export default validateInput;
