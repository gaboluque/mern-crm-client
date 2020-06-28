import { useQuery } from '@apollo/client';

export default (query) => {
  const { data, loading, error } = useQuery(query);

  return { loading, data, error };
};
