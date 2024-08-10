import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { SelectedCustomer } from "../../src/components/SelectedCustomer";
import { useCustomerContext } from "../../src/hooks/useCustomerContext";

// Mocking CustomerImage component
vi.mock("../../src/components/CustomerImage", () => ({
  CustomerImage: () => <div data-testid="mock-customer-image">Image</div>,
}));

// Mocking useCustomerContext hook
vi.mock("../../src/hooks/useCustomerContext", () => ({
  useCustomerContext: vi.fn(),
}));

describe("Selected Customer", () => {
  const mockCustomer = {
    name: "Customer 9",
    address: "Address 9 Elm Street, Springfield, IL 62701, USA",
    title: "Lorem ipsum dolor sit amet",
  };
  // mock selected customer
  beforeEach(() => {
    (useCustomerContext as jest.Mock).mockReturnValue({
      selectedCustomer: mockCustomer,
    });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render customer details and images when a customer is selected", () => {
    render(<SelectedCustomer />);

    // Check for customer details
    expect(screen.getByText(mockCustomer.name)).toBeInTheDocument();
    expect(screen.getByText(mockCustomer.address)).toBeInTheDocument();
    expect(screen.getByText(mockCustomer.title)).toBeInTheDocument();

    const images = screen.getAllByTestId("mock-customer-image");
    expect(images.length).toBe(9);
  });

  it("should render fallback message when no customer is selected", () => {
    (useCustomerContext as jest.Mock).mockReturnValue({
      selectedCustomer: null,
    });

    render(<SelectedCustomer />);
    //expect the fallback message
    expect(screen.getByText("Select a customer")).toBeInTheDocument();
  });
});
