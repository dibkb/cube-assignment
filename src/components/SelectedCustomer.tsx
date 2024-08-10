import React from "react";
import "../styles/selected-customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { CustomerImage } from "./CustomerImage";
import { useMemo } from "react";
export const SelectedCustomer = () => {
  const { selectedCustomer } = useCustomerContext();
  const imageRender = useMemo(() => {
    const key = selectedCustomer?.name;
    return [...new Array(9)].map((img, id) => (
      <CustomerImage key={key ? key + id : id} />
    ));
  }, [selectedCustomer]);
  let content;
  if (selectedCustomer) {
    content = (
      <div className="selected-customer-container">
        <h3 className="selected-customer-name">{selectedCustomer?.name}</h3>
        <h6 className="selected-customer-address">
          {selectedCustomer?.address}
        </h6>
        <p className="selected-customer-title">{selectedCustomer?.title}</p>
        <main className="customer-image-container">{imageRender}</main>
      </div>
    );
  } else {
    content = <div className="selected-customer-empty">Select a customer</div>;
  }
  return content;
};
