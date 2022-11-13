import * as React from 'react';

type FavouritesContextType =
  | {
      favourites: string[];
      addFavourite: (id: string) => void;
      removeFavourite: (id: string) => void;
    }
  | undefined;

const FavouritesContext = React.createContext<FavouritesContextType>(undefined);

type FavouritesProvderProps = {
  children?: React.ReactNode;
};

const FavouritesProvider = ({ children }: FavouritesProvderProps) => {
  const [favouriteIds, setFavouriteIds] = React.useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteIds((currFavs) => [...currFavs, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteIds((currFavs) => currFavs.filter((i) => i !== id));
  };

  const value = React.useMemo(
    () => ({
      favourites: favouriteIds,
      addFavourite,
      removeFavourite,
    }),
    [favouriteIds, addFavourite, removeFavourite]
  );

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

const useFavourites = () => {
  const context = React.useContext(FavouritesContext);

  if (!context) {
    throw new Error('use Favourites must be used within a FavouritesProvider');
  }

  return context;
};

export { FavouritesProvider, useFavourites };
