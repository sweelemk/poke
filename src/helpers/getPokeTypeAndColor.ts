const colours: {[key: string]: string} = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#78C850',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const types: {[key: string]: string} = {
  normal: require('../../assets/types/normal.png'),
  fire: require('../../assets/types/fire.png'),
  water: require('../../assets/types/water.png'),
  electric: require('../../assets/types/electric.png'),
  grass: require('../../assets/types/grass.png'),
  ice: require('../../assets/types/ice.png'),
  fighting: require('../../assets/types/fighting.png'),
  poison: require('../../assets/types/poison.png'),
  ground: require('../../assets/types/ground.png'),
  flying: require('../../assets/types/flying.png'),
  psychic: require('../../assets/types/psychic.png'),
  bug: require('../../assets/types/bug.png'),
  rock: require('../../assets/types/rock.png'),
  ghost: require('../../assets/types/ghost.png'),
  dragon: require('../../assets/types/dragon.png'),
  dark: require('../../assets/types/dark.png'),
  steel: require('../../assets/types/steel.png'),
  fairy: require('../../assets/types/fairy.png'),
};

export const getPokeColor = (name: string) => {
  return colours[name] || '#777777';
};

export const getPokeType = (name: string) => {
  return types[name];
};
