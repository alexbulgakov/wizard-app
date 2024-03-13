import { Dispatch, SetStateAction, useContext } from 'react';
import { LoadingContext } from '../LoadingProvider.tsx';
interface LoadingContextType {
  loadingStatus: string;
  setLoadingStatus: Dispatch<SetStateAction<string>>;
  repeatedRequest: boolean;
  setRepeatedRequest: Dispatch<SetStateAction<boolean>>;
}

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
