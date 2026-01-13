import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <NavLink className="nav-link active p-3" to="/" aria-current="page">
        HomePage
      </NavLink>
      <NavLink className="nav-link active p-3" to="/" aria-current="page">
        Lista Carte
      </NavLink>
      <NavLink className="nav-link p-3" to="/card/:id">
        Dettaglio Carte
      </NavLink>
      <NavLink className="nav-link p-3" to="/">
        Comparatore
      </NavLink>
    </nav>
  );
}
