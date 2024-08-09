import { CustomerList } from "./components/CustomerList";
import { SelectedCustomer } from "./components/SelectedCustomer";
import "./styles/App.css";
function App() {
  return (
    <main className="main-container">
      <h1 className="heading">Cube Assignment</h1>
      <section className="main-grid">
        {/* left side */}
        <div className="left-section">
          <CustomerList />
        </div>
        {/* right side */}
        <div className="right-section">
          <SelectedCustomer />
        </div>
      </section>
    </main>
  );
}

export default App;
