import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Presentation, Feature, Login } from "../pages";
import { ErrorBoundary } from "./error-boundary";
import { NotFoundPage } from "./not-found";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<ErrorBoundary />}>
          <Route index element={<Home />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="feature" element={<Feature />} />
          <Route path="Login" element={<Login />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
