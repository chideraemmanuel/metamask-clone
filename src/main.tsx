import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import { NavMenuContextProvider } from "./contexts/NavMenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NavMenuContextProvider>
        <App />
      </NavMenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
