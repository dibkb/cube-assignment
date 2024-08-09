import React, { createContext, useState, ReactNode } from "react";

interface CustomerContext {
  value: string;
  setValue: (value: string) => void;
}

const defaultState: CustomerContext = {
  value: "",
  setValue: () => {},
};

export const CustomerContext = createContext<CustomerContext>(defaultState);

interface CustomerContextProps {
  children: ReactNode;
}

export const CustomerContextProvider: React.FC<CustomerContextProps> = ({
  children,
}) => {
  const [value, setValue] = useState<string>(defaultState.value);

  return (
    <CustomerContext.Provider value={{ value, setValue }}>
      {children}
    </CustomerContext.Provider>
  );
};
