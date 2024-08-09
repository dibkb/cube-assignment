import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { CustomerContextProvider } from "./context/customerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CustomerContextProvider>
    <App />
  </CustomerContextProvider>
);
