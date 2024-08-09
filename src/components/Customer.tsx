// CSS file
import { useCustomerContext } from "../hooks/useCustomerContext";
import "../styles/customer.css";
import { type Customer as CustomerType } from "../types/Customer";
export const Customer = (customer: CustomerType) => {
  const { title, name } = customer;
  const { setSelectedCustomer } = useCustomerContext();
  return (
    <div
      className="customer-card customer-card-selected"
      onClick={() => setSelectedCustomer(name)}
    >
      <h1 className="customer-name">{name}</h1>
      <p className="customer-title">{title}</p>
    </div>
  );
};
