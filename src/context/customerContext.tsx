import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Customer } from "../types/Customer";
import { makeCustomers } from "../data/mockCustomer";

interface CustomerContext {
  customer: Customer[];
  setCustomer: Dispatch<SetStateAction<Customer[]>>;
}

const defaultState: CustomerContext = {
  customer: makeCustomers(1000),
  setCustomer: () => {},
};

export const CustomerContext = createContext<CustomerContext>(defaultState);

interface CustomerContextProps {
  children: ReactNode;
}

export const CustomerContextProvider: React.FC<CustomerContextProps> = ({
  children,
}) => {
  const [customer, setCustomer] = useState<Customer[]>(defaultState.customer);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
