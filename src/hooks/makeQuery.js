import { useQuery } from '@apollo/client';

export default (query, variables = {}, options = {}) => {
  const { data, loading, error } = useQuery(query, { variables, ...options });

  return { loading, data, error };
};
