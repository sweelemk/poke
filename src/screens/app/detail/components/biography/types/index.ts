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
  types: 
};
