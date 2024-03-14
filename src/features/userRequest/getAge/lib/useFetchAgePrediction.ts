import { useApiMutation } from '@/shared/api/useApiMutation.ts';
import axios from 'axios';

export const useFetchAgePrediction = () => {
  let cancelTokenSource = axios.CancelToken.source();

  const { isPending, mutate, error } = useApiMutation({
    options: {
      onMutate: () => {
        if (cancelTokenSource) {
          cancelTokenSource.cancel('Отмена из-за нового запроса');
        }
        cancelTokenSource = axios.CancelToken.source();
        return { cancelToken: cancelTokenSource.token };
      },
    },
    url: 'https://api.agify.io',
  });

  const performFetch = (
    name: string,
    onSuccess: (data: Record<string, unknown>) => void,
    onError?: (error: unknown) => void
  ) => {
    mutate(
      {
        cancelToken: cancelTokenSource.token,
        queryParams: { name },
      },
      {
        onSuccess,
        onError,
      }
    );
  };

  return {
    cancelCurrentRequest: () => cancelTokenSource.cancel('Отмена запроса'),
    performFetch,
    isPending,
    error,
  };
};
