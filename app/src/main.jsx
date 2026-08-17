import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// The design-system bundle (public/_ds/.../_ds_bundle.js) is loaded as a classic
// script and calls the global `React` at render time — it must share the same
// React instance as react-dom to keep hooks working.
window.React = React;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
