//   reminder - debounce per l'input search
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const filteredCards = cards
    // ricerca delle carte per nome {title} - debounce da inserire una volta controllato l'effettivo funzionamento
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    //filro delle carte per categoria SOLO quando è selezionata, altrimenti mostra tutte le carte.
    //* !category →  true when category === "" | null | undefined
    .filter((c) => !category || c.category === category);

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca per nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
          <div key={card.id ?? index} className="col-md-4 mb-3">
            <CardItem card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
