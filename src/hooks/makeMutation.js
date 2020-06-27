import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default (mutation) => {
  const [action] = useMutation(mutation);
  const [message, setMessage] = useState(null);
  const { push } = useRouter();

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
    setTimeout(() => setMessage(null), 3000);
  };

  const callMutation = async ({
    formValues,
    callback,
    path,
    successMessage = null,
  }) => {
    try {
      const { data } = await action({ variables: { input: formValues } });
      updateMessage({
        message: successMessage,
        kind: 'SUCCESS',
      });
      if (callback) callback(data);
      if (path) push(path);
    } catch (err) {
      updateMessage({ message: err.message, kind: 'ERROR' });
    }
  };

  return { callMutation, message };
};
