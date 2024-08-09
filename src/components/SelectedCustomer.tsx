import "../styles/selected-customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { CustomerImage } from "./CustomerImage";
export const SelectedCustomer = () => {
  const { selectedCustomer } = useCustomerContext();
  return (
    <div className="selected-customer-container">
      <h3 className="selected-customer-name">{selectedCustomer?.name}</h3>
      <h6 className="selected-customer-address">{selectedCustomer?.address}</h6>
      <p className="selected-customer-title">{selectedCustomer?.title}</p>

      <main className="customer-image-container">
        {[...new Array(9)].map((img, id) => (
          <CustomerImage key={id} />
        ))}
      </main>
    </div>
  );
};
