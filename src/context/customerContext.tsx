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
  selectedCustomer: Customer | undefined;
  setSelectedCustomer: Dispatch<SetStateAction<Customer | undefined>>;
}

const defaultState: CustomerContext = {
  customer: makeCustomers(1000),
  setCustomer: () => {},
  selectedCustomer: undefined,
  setSelectedCustomer: () => {},
};

export const CustomerContext = createContext<CustomerContext>(defaultState);

interface CustomerContextProps {
  children: ReactNode;
}

export const CustomerContextProvider: React.FC<CustomerContextProps> = ({
  children,
}) => {
  const [customer, setCustomer] = useState<Customer[]>(defaultState.customer);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  return (
    <CustomerContext.Provider
      value={{ customer, setCustomer, selectedCustomer, setSelectedCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
