import React, { createContext, useState, ReactNode, useContext } from "react";

interface TripPropsContext {
  userPrompt: string;
  setUserPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const TripContext = createContext<TripPropsContext | undefined>(undefined);

export const GetTripProps = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("GetTripProps must be used within a Provider");
  }
  return context;
};

interface TripProviderProps {
  children: ReactNode;
}

export const TripProvider: React.FC<TripProviderProps> = ({ children }) => {
  const [userPrompt, setUserPrompt] = useState<string>("");

  return (
    <TripContext.Provider
      value={{ userPrompt, setUserPrompt}}
    >
      {children}
    </TripContext.Provider>
  );
};
