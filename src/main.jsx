import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MyRoutes } from "./routes";
import { AuthContextProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  </React.StrictMode>
);
