import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function CardItem({ card }) {
  const { favorites, handleFavorite, comparator, handleComparator } =
    useContext(GlobalContext);

  const favoriteCard = favorites.find((c) => c.id === card.id);
  const comparateCard = comparator.find((c) => c.id === card.id);
  console.log(card);
  return (
    <div className="card h-100">
      <div className="card-body">
        <Link
          to={`/card/${card.id}`}
          style={{ textDecoration: "none", color: "purple" }}
        >
          <h5 className="card-title">{card.title}</h5>
        </Link>
        <p className="card-text set">{card.category}</p>
        {/* card mana cost rimosso -> backend filteredItems.map(riga 341)
         Una soluzione temporanea potrebbe funzionare ma non serve al momento */}
        {/* <p className="card-text">{card.manaCost}</p> */}
        <div className="d-flex justify-content-between">
          {/* handleFavorite =>Global Context */}
          <button
            className={`btn ${
              favoriteCard ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => handleFavorite(card)}
          >
            {favoriteCard ? "❤️" : "🖤"}
          </button>
          {/* handleComparator => GlobalContext */}
          <button
            className={`btn ${
              comparateCard ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => handleComparator(card)}
          >
            Compare card
          </button>
        </div>
      </div>
    </div>
  );
}
