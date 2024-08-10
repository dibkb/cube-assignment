import React from "react";
// css file
import "./styles/App.css";
import { CustomerList } from "./components/CustomerList";
import { SelectedCustomer } from "./components/SelectedCustomer";
function App() {
  return (
    <main className="main-container">
      <h1 className="heading">Cube Assignment</h1>
      <section className="main-grid" data-testid="main-grid">
        {/* left side */}
        <div className="left-section" data-testid="left-section">
          <CustomerList />
        </div>
        {/* right side */}
        <div className="right-section" data-testid="right-section">
          <SelectedCustomer />
        </div>
      </section>
    </main>
  );
}

export default App;
