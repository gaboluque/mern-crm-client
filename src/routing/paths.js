const HOME_PATH = '/';

const LOG_IN_PATH = '/log-in';
const SIGN_UP_PATH = '/sign-up';

const CLIENTS_PATH = '/clients';
const NEW_CLIENT_PATH = `${CLIENTS_PATH}/new`;
const SHOW_CLIENT_PATH = (id) => `${CLIENTS_PATH}/${id}`;

const PRODUCTS_PATH = '/products';
const NEW_PRODUCT_PATH = `${PRODUCTS_PATH}/new`;
const SHOW_PRODUCT_PATH = (id) => `${PRODUCTS_PATH}/${id}`;

const ORDERS_PATH = '/orders';
const NEW_ORDER_PATH = `${ORDERS_PATH}/new`;
const SHOW_ORDER_PATH = (id) => `${ORDERS_PATH}/${id}`;

const NOT_FOUND_PATH = '/404';

export {
  HOME_PATH,
  CLIENTS_PATH,
  NEW_CLIENT_PATH,
  SHOW_CLIENT_PATH,
  PRODUCTS_PATH,
  NEW_PRODUCT_PATH,
  SHOW_PRODUCT_PATH,
  ORDERS_PATH,
  NEW_ORDER_PATH,
  SHOW_ORDER_PATH,
  LOG_IN_PATH,
  SIGN_UP_PATH,
  NOT_FOUND_PATH,
};
