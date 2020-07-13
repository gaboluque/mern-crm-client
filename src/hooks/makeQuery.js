import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

export default ({ query, variables = {}, options = {}, polling = 0 }) => {
  const { data, loading, error, startPolling, stopPolling } = useQuery(query, {
    variables,
    ...options,
  });

  useEffect(() => {
    if (polling) {
      startPolling(polling);
      return stopPolling;
    }
    return undefined;
  }, [startPolling, stopPolling]);

  return { loading, data, error, startPolling, stopPolling };
};
