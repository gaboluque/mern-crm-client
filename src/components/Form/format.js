const amountFormat = (input) => {
  if (!input) return input;
  const cleanedInput = `${input}`.replace(/,/g, '');

  const convertedInput = new Intl.NumberFormat().format(cleanedInput);

  return convertedInput;
};

const currencyFormat = (value) => (value ? `$ ${amountFormat(value)}` : value);

export { amountFormat, currencyFormat };
