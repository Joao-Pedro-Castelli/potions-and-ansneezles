import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import StoreFront from "./pages/storeFront";
import Header from "./components/Header";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <StoreFront />
  </StrictMode>,
)
