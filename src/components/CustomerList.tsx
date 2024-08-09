// CSS files
import "../styles/customer.list.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { Customer } from "./Customer";

export const CustomerList = () => {
  const { customer } = useCustomerContext();
  const renderCustomers = customer.map((cust) => <Customer {...cust} />);
  return <div className="customer-list-container">{renderCustomers}</div>;
};
