import React, {
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  Dispatch,
} from 'react';

interface LoadingContextType {
  setRepeatedRequest: Dispatch<SetStateAction<boolean>>;
  setLoadingStatus: Dispatch<SetStateAction<string>>;
  repeatedRequest: boolean;
  loadingStatus: string;
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
        setRepeatedRequest,
        setLoadingStatus,
        repeatedRequest,
        loadingStatus,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
