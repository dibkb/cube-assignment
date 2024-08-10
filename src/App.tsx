import React, { useState } from "react";
import "./styles/App.css";
import { CustomerList } from "./components/CustomerList";
import { SelectedCustomer } from "./components/SelectedCustomer";

function App() {
  const [isLeftSectionOpen, setLeftSectionOpen] = useState(false);

  // toggle handler
  const toggleSidebar = () => {
    setLeftSectionOpen((prevState) => !prevState);
  };

  // on close handler
  const closeLeftSection = () => {
    setLeftSectionOpen(false);
  };

  return (
    <main className="main-container">
      <h1 className="heading">Cube Assignment</h1>
      <section
        className={`main-grid ${isLeftSectionOpen ? "left-open" : ""}`}
        data-testid="main-grid"
      >
        <div className="left-section" data-testid="left-section">
          <CustomerList onClickCallback={closeLeftSection} />
        </div>
        <div className="right-section" data-testid="right-section">
          <SelectedCustomer />
        </div>
      </section>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isLeftSectionOpen ? "Close" : "Open"} Left
      </button>
    </main>
  );
}

export default App;
