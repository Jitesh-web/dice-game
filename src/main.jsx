import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { SharedStateProvider } from "./Components/SharedStateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SharedStateProvider>
      <Router>
        <App />
      </Router>
    </SharedStateProvider>
  </StrictMode>
);
