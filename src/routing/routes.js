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
    title: 'Orders',
    path: paths.ORDERS_PATH,
    private: true,
  },
  {
    title: 'Products',
    path: paths.PRODUCTS_PATH,
    private: true,
  },
];
