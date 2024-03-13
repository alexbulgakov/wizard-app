import { useApiMutation } from '@/shared/api/useApiMutation.ts';

export const useFetchCatFact = () => {
  return useApiMutation({
    url: 'https://catfact.ninja/fact',
  });
};
