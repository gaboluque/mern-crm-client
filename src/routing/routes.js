import * as paths from './paths';

export default [
  {
    title: 'Log In',
    path: paths.LOG_IN_PATH,
    private: false,
  },
  {
    title: 'Sign Up',
    path: paths.SIGN_UP_PATH,
    private: false,
  },
  {
    title: 'Home',
    path: paths.HOME_PATH,
    private: true,
  },
  {
    title: 'Clients',
    path: paths.CLIENTS_PATH,
    private: true,
  },
  {
    title: 'New Client',
    path: paths.NEW_CLIENT_PATH,
    private: true,
  },
  {
    title: 'Show Client',
    path: paths.SHOW_CLIENT_PATH('[id]'),
    private: true,
  },
  {
    title: 'Products',
    path: paths.PRODUCTS_PATH,
    private: true,
  },
  {
    title: 'New Product',
    path: paths.NEW_PRODUCT_PATH,
    private: true,
  },
  {
    title: 'Show Product',
    path: paths.SHOW_PRODUCT_PATH('[id]'),
    private: true,
  },
  {
    title: 'Orders',
    path: paths.ORDERS_PATH,
    private: true,
  },
  {
    title: 'New Order',
    path: paths.NEW_ORDER_PATH,
    private: true,
  },
  {
    title: 'Show Order',
    path: paths.SHOW_ORDER_PATH('[id]'),
    private: true,
  },
  {
    // Must be always at the end
    title: 'Not Found',
    path: paths.NOT_FOUND_PATH,
    private: false,
  },
];
