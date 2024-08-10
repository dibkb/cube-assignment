import React from "react";
// CSS file
import "../styles/customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { type Customer as CustomerType } from "../types/Customer";

export const Customer = (customer: CustomerType) => {
  const { title, name } = customer;
  const { setSelectedCustomer, selectedCustomer } = useCustomerContext();

  // handle card click
  function handleClick() {
    setSelectedCustomer(customer);
  }
  // determine if this customer is selected
  const isSelected = name === selectedCustomer?.name;

  return (
    <div
      className={`customer-card ${isSelected ? "customer-card-selected" : ""}`}
      onClick={handleClick}
    >
      <h1 className="customer-name">{name}</h1>
      <p className="customer-title">{title}</p>
    </div>
  );
};
