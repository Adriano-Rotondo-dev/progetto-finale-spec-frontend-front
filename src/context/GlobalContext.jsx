import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // array vuoto per salvare i preferiti
  const [comparator, setComparator] = useState([]); //array vuoto per il comparatore di carte
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
      if (prev.length < 2) return [...prev, card];
      return prev; // non mette pià di due carte
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
