import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import cardBack from "../assets/images/mtg_cardback.webp";

export default function FavoritesSidebar() {
  const { favorites, handleFavorite } = useContext(GlobalContext);

  return (
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasFavoritesLabel"
    >
      <div className="offcanvas-header border-bottom border-secondary">
        <h5 className="offcanvas-title" id="offcanvasFavoritesLabel">
          Your Favorites List ({favorites.length})
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {favorites.length === 0 ? (
          <p className="text-white">This list is empty!</p>
        ) : (
          <ul className="list-group list-group-flush">
            {favorites.map((card) => (
              <li
                key={card.id}
                className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center border-secondary"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={card.imageUrl || cardBack}
                    alt={card.title}
                    style={{
                      width: "40px",
                      marginRight: "10px",
                      borderRadius: "4px",
                    }}
                  />
                  <Link
                    to={`/card/${card.id}`}
                    className="text-white text-decoration-none small fw-bold"
                  >
                    {card.title}
                  </Link>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleFavorite(card)}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
