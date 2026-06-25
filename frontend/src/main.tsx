import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import StoreFront from "./pages/StoreFront";
import Header from "./components/Header";
import Footer from "./components/Footer";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <div id="content">
      <StoreFront />
    </div>
    <Footer />
  </StrictMode>,
)
