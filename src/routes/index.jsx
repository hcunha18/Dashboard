import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Presentation, Feature, Login } from "../pages";
import { ErrorBoundary } from "./error-boundary";
import { NotFoundPage } from "./not-found";
import { NewHome } from "../pages/NewHome";
import NewLogin from "../pages/NewLogin";

export function MyRoutes() {
  // const { hash } = useLocation();
  //   useEffect(() => {
  //       if (hash) {
  //           const element = document.querySelector(hash);
  //           if ( element ) {
  //               element.scrollIntoView({behavior: "smooth"});
  //           }
  //       }
  //   }, [hash]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<ErrorBoundary />}>
          <Route index element={<NewHome/>} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="feature" element={<Feature />} />
          <Route path="Login" element={<NewLogin/>} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
