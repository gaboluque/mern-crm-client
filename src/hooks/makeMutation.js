import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

const getCacheUpdate = ({ updateAction, queryToUpdate, query }) => ({
  update(cache, { data: { [updateAction]: newData } }) {
    const { [queryToUpdate]: oldData } = cache.readQuery({
      query,
    });
    cache.writeQuery({
      query,
      data: {
        [queryToUpdate]: [...oldData, newData],
      },
    });
  },
});

export default (mutation, cacheUpdateObj) => {
  const updateOption = cacheUpdateObj ? getCacheUpdate(cacheUpdateObj) : {};
  const [action, { loading }] = useMutation(mutation, updateOption);
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
    onError = null,
  }) => {
    try {
      const { data } = await action({ variables: { input: formValues } });
      updateMessage({
        message: successMessage,
        kind: 'SUCCESS',
      });
      if (data && callback) callback(data);
      if (path) {
        setTimeout(() => push(path), 800);
      }
    } catch (err) {
      updateMessage({ message: err.message, kind: 'ERROR' });
      if (onError) onError();
    }
  };

  return { callMutation, message, loading };
};
