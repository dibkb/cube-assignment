// CSS files
import "../styles/customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { Customer } from "./Customer";

export const CustomerList = () => {
  const { customer } = useCustomerContext();
  const renderCustomers = customer.map((cust) => (
    <Customer key={cust.name} {...cust} />
  ));
  return <div className="customer-list-container">{renderCustomers}</div>;
};
