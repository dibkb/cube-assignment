// CSS file
import "../styles/customer.css";
import { type Customer as CustomerType } from "../types/Customer";
export const Customer = (customer: CustomerType) => {
  const { title, name } = customer;
  return (
    <div className="customer-card">
      <h1 className="customer-name">{name}</h1>
      <p className="customer-title">{title}</p>
    </div>
  );
};
