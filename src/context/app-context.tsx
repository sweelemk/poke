import React, {createContext, useContext, useMemo, useReducer} from 'react';
import appReducer, {FavouriteType, Types} from './reducers/app-reducer';

type AppContextValues = {
  favourites: FavouriteType[];
  addFavourite?: any;
  addAllPokemons?: any;
  removePokemon?: any;
};

export const initialAppState = {
  favourites: [],
};

const AppContext = createContext<AppContextValues>({
  favourites: [],
});

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const addFavourite = (id: number) => {
    dispatch({
      type: Types.ADD,
      payload: {favourite_id: id},
    });
  };

  const addAllPokemons = (pokemons: FavouriteType[]) => {
    dispatch({
      type: Types.ALL,
      payload: {all: pokemons},
    });
  };

  const removePokemon = (id: number) => {
    dispatch({
      type: Types.REMOVE,
      payload: {id},
    });
  };
  console.log('state', state);

  const values = useMemo(
    () => ({
      favourites: state.favourites,
      addFavourite,
      addAllPokemons,
      removePokemon,
    }),
    [state],
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
