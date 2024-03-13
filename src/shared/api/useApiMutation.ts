import type { CancelToken } from 'axios';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface ApiError {
  message: string;
}

interface ApiMutationParams {
  options?: UseMutationOptions<
    Record<string, unknown>,
    ApiError,
    MutationFunctionArgs,
    unknown
  >;
  url: string;
}

interface MutationFunctionArgs {
  queryParams?: Record<string, string>;
  cancelToken?: CancelToken;
}

export const useApiMutation = ({ options, url }: ApiMutationParams) => {
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
