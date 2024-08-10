import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";
import React from "react";
import { CustomerContextProvider } from "../src/context/customerContext";
// Mocking CustomerList components
vi.mock("../src/components/CustomerList", () => ({
  CustomerList: () => (
    <div data-testid="mock-customer-list">Mock Customer List</div>
  ),
}));
// Mocking SelectedCustomer components
vi.mock("../src/components/SelectedCustomer", () => ({
  SelectedCustomer: () => (
    <div data-testid="mock-selected-customer">Mock Selected Customer</div>
  ),
}));
// Test the app component
describe("App", () => {
  it("should render the App component", () => {
    render(
      <CustomerContextProvider>
        <App />
      </CustomerContextProvider>
    );
    expect(screen.getByText("Cube Assignment")).toBeInTheDocument();
    // main grid render
    const mainGridSection = screen.getByTestId("main-grid");
    expect(mainGridSection).toBeInTheDocument();
    expect(mainGridSection).toHaveClass("main-grid");

    const leftSection = screen.getByTestId("left-section");
    expect(leftSection).toBeInTheDocument();
    expect(leftSection).toHaveClass("left-section");

    const rightSection = screen.getByTestId("right-section");
    expect(rightSection).toBeInTheDocument();
    expect(rightSection).toHaveClass("right-section");
  });

  it("should render the mocked CustomerList component in the left section", () => {
    render(
      <CustomerContextProvider>
        <App />
      </CustomerContextProvider>
    );
    const leftSection = screen.getByTestId("left-section");
    expect(leftSection).toContainElement(
      screen.getByTestId("mock-customer-list")
    );
  });

  it("should render the mocked SelectedCustomer component in the left section", () => {
    render(
      <CustomerContextProvider>
        <App />
      </CustomerContextProvider>
    );
    const rightSection = screen.getByTestId("right-section");
    expect(rightSection).toContainElement(
      screen.getByTestId("mock-selected-customer")
    );
  });

  it("should not have any extra elements in the left and right sections", () => {
    render(
      <CustomerContextProvider>
        <App />
      </CustomerContextProvider>
    );

    const leftSection = screen.getByTestId("left-section");
    expect(leftSection.childElementCount).toBe(1);
    expect(leftSection).toContainElement(
      screen.getByTestId("mock-customer-list")
    );

    const rightSection = screen.getByTestId("right-section");
    expect(rightSection.childElementCount).toBe(1);
    expect(rightSection).toContainElement(
      screen.getByTestId("mock-selected-customer")
    );
  });

  it("should have a main-container class on the main element", () => {
    render(
      <CustomerContextProvider>
        <App />
      </CustomerContextProvider>
    );
    expect(screen.getByRole("main")).toHaveClass("main-container");
  });
});
