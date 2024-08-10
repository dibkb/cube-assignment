import { it, expect, describe, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { useCustomerContext } from "../../src/hooks/useCustomerContext";
import { CustomerList } from "../../src/components/CustomerList";
import { Customer } from "../../src/types/Customer";

// Mocking Customer component
vi.mock("../../src/components/Customer", () => ({
  Customer: ({ name, title }: Customer) => (
    <div data-testid="mock-customer">
      <h1 data-testid="mock-customer-name">{name}</h1>
      <p data-testid="mock-customer-title">{title}</p>
    </div>
  ),
}));

// Mocking useCustomerContext hook
vi.mock("../../src/hooks/useCustomerContext", () => ({
  useCustomerContext: vi.fn(),
}));

describe("CustomerList", () => {
  const mockCustomers: Customer[] = Array.from({ length: 100 }, (_, i) => ({
    name: `Customer ${i}`,
    title: `Title ${i}`,
    address: `Address ${i}`,
  }));

  beforeEach(() => {
    (useCustomerContext as jest.Mock).mockReturnValue({
      customer: mockCustomers,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the initial batch of customers and count should be 10", () => {
    render(<CustomerList />);

    const customerElements = screen.getByTestId("customer-list-container");
    expect(customerElements.childElementCount).toBe(10);
  });

  it("renders a message when there are no customers", () => {
    (useCustomerContext as jest.Mock).mockReturnValue({
      customers: [],
    });

    render(<CustomerList />);

    const customerElements = screen.getByTestId("customer-list-container");
    expect(customerElements.childElementCount).toBe(0);
  });

  it("render the correct content in the Customer component", () => {
    render(<CustomerList />);
    const allCustomers = screen.getAllByTestId("mock-customer");
    expect(allCustomers.length).toBe(10);
    for (let i = 0; i < 10; ++i) {
      checkCustomerContent(allCustomers, i);
    }
  });
});

function checkCustomerContent(allCustomers, index) {
  const customer = allCustomers[index];
  expect(customer).toBeInTheDocument();
  expect(screen.getAllByTestId("mock-customer-name")[index]).toHaveTextContent(
    `Customer ${index}`
  );
  expect(screen.getAllByTestId("mock-customer-title")[index]).toHaveTextContent(
    `Title ${index}`
  );
}
