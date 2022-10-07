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

export type Abilities = {
  ability: NameURLInterface;
  is_hidden: boolean;
  slot: number;
};

export type AbilitiesEffectEntries = {
  effect: string;
  short_effect: string;
  language: NameURLInterface;
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

export type Varieties = {
  is_default: boolean;
  pokemon: NameURLInterface;
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
  egg_groups: NameURLInterface[];
  hatch_counter: number;
  varieties: Varieties[];
};

export type Chain = {
  is_baby: boolean;
  species: NameURLInterface;
  evolution_details: {
    item: NameURLInterface;
    trigger: NameURLInterface;
    gender: number;
    held_item: NameURLInterface;
    known_move: NameURLInterface;
    known_move_type: NameURLInterface;
    location: NameURLInterface;
    min_level: number;
    min_happiness: NameURLInterface;
    min_beauty: NameURLInterface;
    min_affection: NameURLInterface;
    needs_overworldRain: boolean;
    party_species: NameURLInterface;
    party_type: NameURLInterface;
    relative_physicalStats: number;
    time_of_day: string;
    trade_species: NameURLInterface;
    turn_upside_down: boolean;
  }[];
  evolves_to: Chain[];
};

export type PokemonEvolutionChain = {
  baby_trigger_item: null;
  chain: Chain;
};

export type ChainPair = {
  name: string;
  url: string;
  min_level: number | undefined;
}[];

export type MegaChainPair = {
  is_default: boolean;
  pokemon: NameURLInterface;
};
