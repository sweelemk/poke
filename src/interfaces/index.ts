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

export type Link = {
  name: string;
  url: string;
};

export type Abilities = {
  ability: Link;
  is_hidden: boolean;
  slot: number;
};

export type AbilitiesEffectEntries = {
  effect: string;
  short_effect: string;
  language: Link;
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
  damage_relations: DamageRelations;
};

export type FlavorText = {
  flavor_text: string;
  language: {name: string; url: string};
};

export type Genera = {
  genus: string;
  language: {
    name: string;
    url: string;
  };
};

export type DamageRelations = {
  weakness: string[];
  strength: string[];
};

export type PokemonSpeciesType = {
  base_happiness: number;
  capture_rate: number;
  evolution_chain: {url: string};
  flavor_text_entries: FlavorText[];
  gender_rate: number;
  generation: {name: string; url: string};
  growth_rate: {name: string; url: string};
  is_legendary: boolean;
  is_mythical: boolean;
  shape: {name: string; url: string};
  genera: Genera[];
  egg_groups: Link[];
  hatch_counter: number;
};
