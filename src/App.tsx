import React, { useState } from "react";
// css file
import "./styles/App.css";
import { CustomerList } from "./components/CustomerList";
import { SelectedCustomer } from "./components/SelectedCustomer";
function App() {
  const [isLeftSectionOpen, setLeftSectionOpen] = useState(false);
  // toggle the left section
  const toggleSidebar = () => {
    setLeftSectionOpen((prevState) => !prevState);
  };
  return (
    <main className="main-container">
      <h1 className="heading">Cube Assignment</h1>
      <section className="main-grid" data-testid="main-grid">
        <div
          className={`left-section ${isLeftSectionOpen ? "open" : ""}`}
          data-testid="left-section"
        >
          <CustomerList />
        </div>
        <div className="right-section" data-testid="right-section">
          <SelectedCustomer />
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isLeftSectionOpen ? "Close" : "Open"} Sidebar
        </button>
      </section>
    </main>
  );
}

export default App;
