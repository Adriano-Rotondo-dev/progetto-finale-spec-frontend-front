import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

export default function Navbar() {
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

      <NavLink className="nav-link p-3 text-muted" to="/">
        {/* Al momento, wip  */}
        Comparatore
      </NavLink>
    </nav>
  );
}
