import { useContext } from "react";
import { CustomerContext } from "../context/customerContext";

export const useCustomerContext = () => useContext(CustomerContext);
