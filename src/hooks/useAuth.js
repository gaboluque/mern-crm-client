import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LOG_IN_PATH, SIGN_UP_PATH, HOME_PATH } from '../routing/paths';
import makeMutation from './makeMutation';

const VERIFY_TOKEN_MUTATION = gql`
  mutation verifyToken {
    verifyToken {
      id
      name
      lastName
      email
    }
  }
`;

export default (path) => {
  const [auth, setAuth] = useState(undefined);
  const { push } = useRouter();
  const { callMutation: verifyToken } = makeMutation(VERIFY_TOKEN_MUTATION);

  const isAuthPath = [LOG_IN_PATH, SIGN_UP_PATH].includes(path);
  useEffect(() => {
    verifyToken({
      callback: ({ verifyToken: authObj }) => {
        setAuth(authObj);
        localStorage.setItem('user', JSON.stringify(authObj));
        if (isAuthPath) {
          push(HOME_PATH);
        }
      },
      onError: () => {
        const newPath = isAuthPath ? path : LOG_IN_PATH;
        push(newPath);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      },
    });
  }, [path]);

  return { auth };
};
