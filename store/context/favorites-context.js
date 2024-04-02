import { createContext, useEffect, useState } from "react";

//대문자로 표기 컴포넌트로 활용
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((prev) => prev.filter((item) => item !== id));
  }

  useEffect(() => {}, [favoriteMealIds]);

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
