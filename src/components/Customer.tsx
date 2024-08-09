// CSS file
import "../styles/customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { type Customer as CustomerType } from "../types/Customer";
export const Customer = (customer: CustomerType) => {
  const { title, name } = customer;
  const { setSelectedCustomer, selectedCustomer } = useCustomerContext();
  if (customer.name === selectedCustomer?.name) {
    return (
      <div className="customer-card customer-card-selected">
        <h1 className="customer-name">{name}</h1>
        <p className="customer-title">{title}</p>
      </div>
    );
  } else
    return (
      <div
        className="customer-card"
        onClick={() => setSelectedCustomer(customer)}
      >
        <h1 className="customer-name">{name}</h1>
        <p className="customer-title">{title}</p>
      </div>
    );
};
