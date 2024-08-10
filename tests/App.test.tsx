import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";
import React from "react";
import { CustomerContextProvider } from "../src/context/customerContext";
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
});
