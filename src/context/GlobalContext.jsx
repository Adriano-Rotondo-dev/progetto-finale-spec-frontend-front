import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("mtg_favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [comparator, setComparator] = useState([]); //array vuoto per il comparatore di carte

  // persistenza dei preferiti
  useEffect(() => {
    localStorage.setItem("mtg_favorites", JSON.stringify(favorites));
  }, [favorites]);

  //aggiunge o rimuove l'elemento dai preferiti
  const handleFavorite = (card) => {
    setFavorites((prev) =>
      prev.find((c) => c.id === card.id)
        ? prev.filter((c) => c.id !== card.id)
        : [...prev, card]
    );
  };

  //Aggiunge/rimuove le carte dal comparatore (atm max 2 carte)
  const handleComparator = (card) => {
    setComparator((prev) => {
      const exists = prev.find((c) => c.id === card.id);
      if (exists) return prev.filter((c) => c.id !== card.id);
      return [...prev, card];
    });
  };

  return (
    <GlobalContext.Provider
      value={{ favorites, handleFavorite, comparator, handleComparator }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
