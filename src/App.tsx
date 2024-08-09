import { CustomerList } from "./components/CustomerList";
import "./styles/App.css";
function App() {
  return (
    <main className="main-container">
      <h1 className="heading">This is the heading</h1>
      <section className="main-grid">
        {/* left side */}
        <div className="left-section">
          <CustomerList />
        </div>
        {/* right side */}
        <div className="right-section"></div>
      </section>
    </main>
  );
}

export default App;
