//   reminder - debounce per l'input search
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import CardItem from "./CardItem";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const debounceSetSearchQuery = useCallback(
    debounce((value) => {
      setSearchQuery(value);
    }, 500),
    []
  );
  //cleanup debounce
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
        value={searchQuery}
        onChange={(e) => debounceSetSearchQuery(e.target.value)}
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
        {filteredCards.map((card, index) => (
          //index è lì solo finché non passo all'api scryfall [o inserisco gli id manualmente]
          <div key={card.id ?? index} className="col-md-4 mb-3">
            <CardItem card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
