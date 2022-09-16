type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  ADD = 'APP/ADD_FAVOURITE',
  REMOVE = 'APP/REMOVE_FAVOURITE',
  ALL = 'APP/ALL_FAVOURITE',
}

export type FavouriteType = {
  user_id?: string;
  favourite_id: number;
};

export type AppStateProps = {
  favourites: FavouriteType[];
};

type AppPayload = {
  [Types.ADD]: {
    favourite_id: number;
  };
  [Types.REMOVE]: {
    id: number;
  };
  [Types.ALL]: {
    all: FavouriteType[];
  };
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];

const appReducer = (state: AppStateProps, action: AppActions) => {
  const {type, payload} = action;

  switch (type) {
    case Types.ALL:
      const all = payload.all;
      return {
        ...state,
        favourites: [...state.favourites, ...all],
      };
    case Types.ADD:
      return {
        ...state,
        favourites: [...state.favourites, payload],
      };
    case Types.REMOVE:
      const filtered = state.favourites.filter(
        f => f.favourite_id !== payload.id,
      );

      return {
        ...state,
        favourites: filtered,
      };
    default:
      return state;
  }
};

export default appReducer;
