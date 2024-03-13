import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface LoadingContextType {
  loadingStatus: string;
  setLoadingStatus: Dispatch<SetStateAction<string>>;
  repeatedRequest: boolean;
  setRepeatedRequest: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loadingStatus, setLoadingStatus] = useState<string>('pending');
  const [repeatedRequest, setRepeatedRequest] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        loadingStatus,
        setLoadingStatus,
        repeatedRequest,
        setRepeatedRequest,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
