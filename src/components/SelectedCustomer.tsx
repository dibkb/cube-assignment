import React, { useMemo } from "react";
import "../styles/selected-customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { CustomerImage } from "./CustomerImage";

export const SelectedCustomer: React.FC = () => {
  const { selectedCustomer } = useCustomerContext();

  // generate CustomerImage components
  const imageRender = useMemo(() => {
    const keyPrefix = selectedCustomer?.name || "default";
    return Array.from({ length: 9 }, (_, id) => (
      <CustomerImage key={`${keyPrefix}-${id}`} />
    ));
  }, [selectedCustomer]);

  // Render the the component based on selected or not
  return selectedCustomer ? (
    <div className="selected-customer-container">
      <h3 className="selected-customer-name">{selectedCustomer.name}</h3>
      <h6 className="selected-customer-address">{selectedCustomer.address}</h6>
      <p className="selected-customer-title">{selectedCustomer.title}</p>
      <main className="customer-image-container">{imageRender}</main>
    </div>
  ) : (
    <div className="selected-customer-empty">Select a customer</div>
  );
};
