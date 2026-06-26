import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/Header";
import StoreFront from "./pages/StoreFront";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div id="content">
        <Routes>
          <Route index element={<StoreFront />} />
          <Route path="loja" element={<Shop />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
