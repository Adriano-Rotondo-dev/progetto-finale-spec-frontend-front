import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

import App from "./App.jsx";
import CardListPage from "./pages/CardListPage.jsx";
import CardDetailsPage from "./pages/CardDetailsPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* App Base Layout wip for now */}
      <Route path="/" element={<App />}>
        {/* Card list component */}
        <Route index element={<CardListPage />} />
        {/* Route dettaglio carte */}
        <Route path="card/:id" element={<CardDetailsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
