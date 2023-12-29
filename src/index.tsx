import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

declare global {
  interface Window {
    webkit?: any;
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
