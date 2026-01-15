import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Comparator() {
  const { comparator, handleComparator } = useContext(GlobalContext);

  // gestione dello state vuoto del comparatore
  if (comparator.length === 0)
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-danger my-5">No cards are being compared.</h2>
        <p className="text-white"> Please select cards to compare.</p>
      </div>
    );

  return (
    <div className="container my-4">
      <h3 className="text-center mb-3 text-white">Card Comparator</h3>
      <div className="row g-3 justify-content-center">
        {comparator.map((card) => (
          <div
            key={card.id}
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <div className="card" style={{ width: "100%" }}>
              <img
                src={card.imageUrl}
                alt={card.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                  <strong>Set:</strong> {card.category} <br />
                  <strong>Mana:</strong> {card.manaCost} <br />
                  <strong>Power/Toughness:</strong> {card.power}/
                  {card.toughness} <br />
                  <strong>Types:</strong> {card.types.join(", ")}
                  <br />
                  <strong>Theme:</strong> {card.theme} <br />
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleComparator(card)}
                >
                  Remove this card from comparison
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
