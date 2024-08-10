import React from "react";
// CSS files
import "../styles/customer.css";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { Customer } from "./Customer";
import { useCallback, useEffect, useRef, useState } from "react";

export const CustomerList = () => {
  const customerListRef = useRef<HTMLDivElement>(null);
  const { customer } = useCustomerContext();
  // store the visible customers
  const [visibleCustomers, setVisibleCustomers] = useState(
    customer?.slice(0, 10)
  );
  const [hasMore, setHasMore] = useState(visibleCustomers?.length === 10);
  const loadMoreCustomers = useCallback(() => {
    const currLength = visibleCustomers.length;
    const nextBatch = customer.slice(currLength, currLength + 10);
    if (currLength + nextBatch.length >= customer.length) {
      setHasMore(false);
    }
    setVisibleCustomers((prev) => [...prev, ...nextBatch]);
  }, [customer, visibleCustomers]);
  useEffect(() => {
    const curr = customerListRef.current;
    if (curr) {
      const handleScroll = () => {
        if (
          curr.scrollTop + curr.clientHeight >= curr.scrollHeight - 1 &&
          hasMore
        ) {
          loadMoreCustomers();
        }
      };
      curr.addEventListener("scroll", handleScroll);
      // cleanup
      return () => {
        curr.removeEventListener("scroll", handleScroll);
      };
    }
  }, [visibleCustomers, hasMore, loadMoreCustomers]);
  return (
    <div
      className="customer-list-container"
      data-testid="customer-list-container"
      ref={customerListRef}
    >
      {visibleCustomers?.map((cust) => (
        <Customer key={cust.name} {...cust} />
      ))}
    </div>
  );
};
