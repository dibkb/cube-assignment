import { useCustomerContext } from "../hooks/useCustomerContext";

export const CustomerList = () => {
  const { customer } = useCustomerContext();
  console.log(customer);
  return <div>{}</div>;
};
