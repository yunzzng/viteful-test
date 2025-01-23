import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Suspense>
);
