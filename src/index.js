import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/css/tailwind.css";

ReactDOM.render(
  <Router basename="/Sweetsoft-test-NhaTrangXanh/">
    <App />
  </Router>,
  document.getElementById("root")
);
