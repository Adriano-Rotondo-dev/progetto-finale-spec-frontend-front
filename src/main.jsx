import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CardListPage from "./pages/CardListPage.jsx";
import CardDetailsPage from "./pages/CardDetailsPage.jsx";
import ComparatorPage from "./pages/ComparatorPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* App for Base Layout with Navbar  */}
      <Route path="/" element={<App />}>
        {/* HomePage */}
        <Route index element={<HomePage />} />
        {/* Card list Page */}
        <Route path="cards" element={<CardListPage />} />
        {/* Details Page */}
        <Route path="card/:id" element={<CardDetailsPage />} />
        {/* Comparator Page */}
        <Route path="comparator" element={<ComparatorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
