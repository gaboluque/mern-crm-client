import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { fireAlert } from '../components/Layout/Feedback/swalAlert';

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

const createAlert = (title, message, icon) => ({
  title,
  message,
  icon,
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
    withAlert = false,
  }) => {
    let alert;
    try {
      const { data } = await action({ variables: formValues });
      updateMessage({
        message: successMessage,
        kind: 'SUCCESS',
      });
      alert = createAlert('Success!', successMessage || '', 'success');
      if (data && callback) callback(data);
      if (path) {
        setTimeout(() => push(path), 800);
      }
    } catch (err) {
      updateMessage({ message: err.message, kind: 'ERROR' });
      alert = createAlert('Error!', err.message, 'error');
      if (onError) onError();
    }
    if (withAlert) fireAlert(alert.title, alert.message, alert.icon);
  };

  return { callMutation, message, loading };
};
