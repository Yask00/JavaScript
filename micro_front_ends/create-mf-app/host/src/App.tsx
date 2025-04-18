import React from "react";
import ReactDOM from "react-dom/client";
const Button = React.lazy(() => import("mfRemote/Button"));
import "./index.css";

const App = () => (
  <>
    <h1>Host MF</h1>
    <Button />
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
