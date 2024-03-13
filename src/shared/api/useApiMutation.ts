import axios from 'axios';
import type { CancelToken } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface ApiError {
  message: string;
}

interface ApiMutationParams {
  url: string;
  options?: UseMutationOptions<
    Record<string, unknown>,
    ApiError,
    MutationFunctionArgs,
    unknown
  >;
}

interface MutationFunctionArgs {
  queryParams?: Record<string, string>;
  cancelToken?: CancelToken;
}

export const useApiMutation = ({ url, options }: ApiMutationParams) => {
  return useMutation({
    ...options,
    mutationFn: async ({ queryParams, cancelToken }) => {
      const queryString = queryParams
        ? `?${new URLSearchParams(queryParams).toString()}`
        : '';
      const fullUrl = `${url}${queryString}`;

      return axios.get(fullUrl, { cancelToken });
    },
  });
};
