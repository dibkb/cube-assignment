// CSS file
import "../styles/customer.list.css";
import { type Customer as CustomerType } from "../types/Customer";
export const Customer = (customer: CustomerType) => {
  const { title, name } = customer;
  return (
    <div className="customer-card">
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};
