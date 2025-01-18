import ReactDOM from "react-dom/client";
import React from "react";
import App from "./views/App";
import "./index.css";

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
