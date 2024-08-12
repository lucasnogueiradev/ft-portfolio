import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./components/hooks/theme";
import dark from "./styles/themes/Dark";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={dark}
      toggleTheme={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
