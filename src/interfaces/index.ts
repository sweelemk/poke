export interface NameURLInterface {
  name: string;
  url: string;
}

export interface PokemonTypes {
  slot: number;
  type: NameURLInterface;
}

export interface PokemonListType {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export type FavouritesPokemon = {
  favourite_id: number;
};

type Abilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonDetail = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  abilities: Abilities[];
  base_experience: number;
  height: number;
  weight: number;
  stats: Stats[];
};
