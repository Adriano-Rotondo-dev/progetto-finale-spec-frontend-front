//   reminder - debounce per l'input search
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import CardItem from "./CardItem";

export default function CardList() {
  const [cards, setCards] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const debounceSetSearchQuery = useMemo(
    () => debounce(setSearchQuery, 500),
    []
  );

  useEffect(() => {
    return () => {
      debounceSetSearchQuery.cancel();
    };
  }, [debounceSetSearchQuery]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debounceSetSearchQuery(value);
  };

  const filteredCards = cards
    // ricerca delle carte per nome {title} - debounce da inserire una volta controllato l'effettivo funzionamento
    .filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
    //filro delle carte per categoria SOLO quando è selezionata, altrimenti mostra tutte le carte.
    //* !category →  true when category === "" | null | undefined
    .filter((c) => !category || c.category === category);

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca per nome..."
        value={inputValue}
        onChange={handleSearchChange}
        className="form-control mb-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="form-select mb-3"
      >
        <option value="">Tutti i set</option>
        <option value="Lorwyn">Lorwyn</option>
        <option value="Morningtide">Morningtide</option>
        <option value="Shadowmoor">Shadowmoor</option>
        <option value="Eventide">Eventide</option>
      </select>

      <div className="row">
        {/* Gestione della ricerca vuota con ternario  */}
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="col-md-4 mb-3">
              <CardItem card={card} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <h4 className="text-danger italic">
              Non ci sono carte con questo nome "{searchQuery}"
            </h4>
            <p className="text-white">
              Prova a cambiare i filtri o la ricerca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
