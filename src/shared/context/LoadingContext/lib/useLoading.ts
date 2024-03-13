import { SetStateAction, useContext, Dispatch } from 'react';

import { LoadingContext } from '../LoadingProvider.tsx';
interface LoadingContextType {
  setRepeatedRequest: Dispatch<SetStateAction<boolean>>;
  setLoadingStatus: Dispatch<SetStateAction<string>>;
  repeatedRequest: boolean;
  loadingStatus: string;
}

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
