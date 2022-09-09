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
  _id?: string;
}
