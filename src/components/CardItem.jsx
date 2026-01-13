import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function CardItem({ card }) {
  const { favorites, handleFavorite, comparator, handleComparator } =
    useContext(GlobalContext);

  const favoriteCard = favorites.find((c) => c.id === card.id);
  const comparateCard = comparator.find((c) => c.id === card.id);

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text set">{card.category}</p>
        <p className="card-text mana">{card.manaCost}</p>
        <div className="d-flex justify-content-between">
          <button
            className={`btn ${
              favoriteCard ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => handleFavorite(card)}
          >
            {favoriteCard ? "❤️" : "🖤"}
            {/* reminder - fontawesome star // empty star icons qui  */}
          </button>
          <button
            className={`btn ${
              comparateCard ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handleComparator(card)}
          >
            Compare card
            {/* reminder - fontawesome icon adeguata qui  */}
          </button>
        </div>
      </div>
    </div>
  );
}
