import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContex from "./contex/userContex.jsx";

createRoot(document.getElementById("root")).render(
  <UserContex>
    <App />
  </UserContex>
);
