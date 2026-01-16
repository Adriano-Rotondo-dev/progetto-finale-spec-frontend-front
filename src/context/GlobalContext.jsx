import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export const GlobalContext = createContext();

//salvataggio dei preferiti in localStorage
export default function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("mtg_favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  //array vuoto per il comparatore di carte
  const [comparator, setComparator] = useState([]);

  // persistenza dei preferiti
  useEffect(() => {
    localStorage.setItem("mtg_favorites", JSON.stringify(favorites));
  }, [favorites]);

  //aggiunge o rimuove l'elemento dai preferiti
  const handleFavorite = useCallback((card) => {
    setFavorites((prev) =>
      prev.find((c) => c.id === card.id)
        ? prev.filter((c) => c.id !== card.id)
        : [...prev, card]
    );
  }, []);

  //Aggiunge/rimuove le carte dal comparatore
  const handleComparator = useCallback((card) => {
    setComparator((prev) => {
      const exists = prev.find((c) => c.id === card.id);
      if (exists) return prev.filter((c) => c.id !== card.id);
      return [...prev, card];
    });
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      handleFavorite,
      comparator,
      handleComparator,
    }),
    [favorites, handleFavorite, comparator, handleComparator]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
