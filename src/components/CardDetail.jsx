import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function CardDetail() {
  const { id } = useParams();
  //recupero l'id dalla route

  // Hardcode degli id per la gestione del previous/next
  const MinId = 1;
  const MaxId = 12;

  const { favorites, handleFavorite, comparator, handleComparator } =
    useContext(GlobalContext);

  const [card, setCard] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/cards/${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data.card))
      .catch((err) => console.error(err));
  }, [id]);

  // Gestione del Loading - se resta tempo con un componente
  if (!card) return <p>Loading...</p>;

  // hardcode Prev/Next
  const prevId = card.id - 1;
  const nextId = card.id + 1;

  const isFavorite = favorites.find((c) => c.id === card.id);
  const isInComparator = comparator.find((c) => c.id === card.id);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{card.title}</h2>

      {/* Colonna sinistra: immagine */}
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <button
            className={`btn mb-2 ${
              isFavorite ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => handleFavorite(card)}
          >
            {isFavorite
              ? "❤️ Salvata nei preferiti"
              : "🖤 Aggiungi ai preferiti"}
          </button>

          {/* imageUrl  */}
          <div className="card mb-2" style={{ width: "50%" }}>
            <img
              src={card.imageUrl}
              alt={card.title}
              className="card-img-top"
            />
          </div>
          {/* Comparatore - MANCA LA LOGICA*/}
          <button
            className={`btn ${
              isInComparator ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handleComparator(card)}
          >
            {isInComparator ? "Comparata" : "Aggiungi al comparatore"}
          </button>
        </div>

        {/* Colonna destra: proprietà carta */}
        <div className="col-md-6 mt-5">
          <ul className="list-group">
            {/* Category */}
            <li className="list-group-item">
              <strong>Set:</strong> {card.category}
            </li>
            {/* ManaCost */}
            <li className="list-group-item">
              <strong>Mana Cost:</strong> {card.manaCost}
            </li>
            {/* Types */}
            <li className="list-group-item">
              <strong>Types:</strong> {card.types.join(", ")}
            </li>
            {/* SubTypes  */}
            <li className="list-group-item">
              <strong>Subtypes:</strong> {card.subtypes.join(", ")}
            </li>
            {/* Power + Toughness  */}
            <li className="list-group-item">
              <strong>Power/Toughness:</strong> {card.power}/{card.toughness}
            </li>
            {/* Text  */}
            <li className="list-group-item">
              <strong>Text:</strong> {card.text}
            </li>
            {/* Rarity  */}
            <li className="list-group-item">
              <strong>Rarity:</strong> {card.rarity}
            </li>
            {/* Theme  */}
            <li className="list-group-item">
              <strong>Theme:</strong> {card.theme}
            </li>
          </ul>
        </div>
      </div>

      {/* Next/Previous btns */}
      {/* Prev */}
      <div className="mt-4 pb-3 d-flex justify-content-between">
        {card.id > MinId ? (
          <Link className="btn btn-outline-secondary" to={`/card/${prevId}`}>
            ← Previous Card
          </Link>
        ) : (
          <div />
        )}
        {/* Next */}
        {card.id < MaxId ? (
          <Link className="btn btn-outline-secondary" to={`/card/${nextId}`}>
            Next Card →
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Back to ListPage */}
      <div className="mt-4 text-center pb-3">
        <Link to="/" className="btn btn-outline-secondary">
          ← Torna alla lista
        </Link>
      </div>
    </div>
  );
}
