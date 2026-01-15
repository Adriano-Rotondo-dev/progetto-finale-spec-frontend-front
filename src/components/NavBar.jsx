import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const { favorites } = useContext(GlobalContext);

  return (
    <nav className="navbar navbar-expand-lg navBg p-3 text-white">
      <NavLink className="nav-link p-3" to="/" aria-current="page">
        HomePage
      </NavLink>
      {/* Card List */}
      <NavLink className="nav-link p-3" to="/cards" aria-current="page">
        Lista Carte
      </NavLink>

      {/* solo a fine dimostrativo per tornare alla Carta 1 - atm / possibile eliminarlo */}
      <NavLink className="nav-link p-3" to="/card/1">
        Dettaglio Carte
      </NavLink>

      <NavLink className="nav-link p-3 " to="/comparator">
        {/* Al momento, wip  */}
        Comparatore
      </NavLink>

      {/* SideBar Favorites btn */}
      <button
        className="btn btn-info position-relative ms-auto text-white"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" // Assicurati che questo ID coincida con quello nel FavoritesPanel
      >
        Preferiti
        {favorites && favorites.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {favorites.length}
          </span>
        )}
      </button>
    </nav>
  );
}
