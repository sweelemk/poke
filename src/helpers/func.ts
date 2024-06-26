import type {
  MegaChainPair,
  PokemonEvolutionChain,
  Stats,
} from './../interfaces';
import type {
  Abilities,
  AbilitiesEffectEntries,
  PokemonSpeciesType,
} from '../interfaces';

export const getInitials = (name: string) => {
  const nameArr: string[] = name.split(' ');
  const letters = nameArr.map((word: string) => word.charAt(0));

  return letters.join('');
};

export const getPageOffset = (url: string) => {
  const urlInterface = new URL(url);
  const offset = urlInterface.searchParams.get('offset');
  return Number(offset);
};

export const getStringIDfromID = (id: number) => {
  if (id >= 10 && id < 100) {
    return `0${id}`;
  }
  if (id >= 100) {
    return `${id}`;
  }
  return `00${id}`;
};

export const getPokemonImage = (id: number) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getStringIDfromID(
    id,
  )}.png`;
};

export const convertHexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

export const getBiographyText = (
  _spices: PokemonSpeciesType,
  _types: string[],
) => {
  const lang = _spices.flavor_text_entries.filter(
    entry => entry.language.name === 'en',
  )[0];

  const joinTypes = _types.join(' and ');

  const legend = _spices.is_legendary ? ' legendary, ' : '';
  const mythic = _spices.is_mythical ? ' mythical, ' : '';

  return `${legend}${mythic}${joinTypes} type pokemon. ${lang?.flavor_text.replace(
    /\r?\n|\f|\r/g,
    ' ',
  )}`;
};

export const getAbilityId = (abilities: Abilities) => {
  const parseUrl = abilities.ability.url.split('/').filter((i: string) => i);

  return parseUrl[parseUrl.length - 1];
};

export const getAbilityText = (text: AbilitiesEffectEntries[]) => {
  const enText = text.filter((t: any) => t.language.name === 'en')[0];

  return enText?.short_effect;
};

export const getGender = (rate: number) => {
  const rates: {[key: number]: {male: number; female: number}} = {
    1: {male: 100, female: 0},
    2: {male: 87.5, female: 12.5},
    3: {male: 75, female: 25},
    4: {male: 62.5, female: 37.5},
    5: {male: 37.5, female: 62.5},
    6: {male: 25, female: 75},
    7: {male: 12.5, female: 87.5},
    8: {male: 0, female: 100},
  };

  return rates[rate];
};

export const calculateCatchRate = (gender: number) => {
  return `${((gender / (3 * 255)) * 100).toFixed(1)} % PokéBall & Full HP`;
};

export const uniq = (array: string[]) => {
  return array.filter((c, index) => {
    return array.indexOf(c) === index;
  });
};

export const calculateMaxStats = (id: number, stat: Stats) => {
  if (id === 192) {
    return 1;
  } else if (stat.stat.name === 'hp') {
    return Math.floor(((2 * stat.base_stat + 31 + 63) * 100) / 100 + 100 + 10);
  } else {
    return Math.floor(
      Math.floor(((2 * stat.base_stat + 31 + 63) * 100) / 100 + 5) * 1.1,
    );
  }
};

export const getPairs = (array: any) =>
  array.reduce(
    (acc: any[], _curr: any, _index: number, currArray: string | any[]) => {
      if (_index < currArray.length - 1) {
        return [...acc, currArray.slice(_index, _index + 2)];
      }
      return acc;
    },
    [],
  );

export const parseEvolution = (response: PokemonEvolutionChain) => {
  const evoChain = [];
  let evoData = response.chain;

  do {
    evoChain.push({
      name: evoData.species.name,
      url: evoData.species.url,
      min_level: evoData.evolves_to[0]?.evolution_details[0]?.min_level,
    });
    // @ts-ignore
    [evoData] = evoData.evolves_to;
  } while (
    evoData &&
    Object.prototype.hasOwnProperty.call(evoData, 'evolves_to')
  );

  const pairChain = getPairs(evoChain);

  return pairChain;
};

export const getIdFromUrl = (url: string) => {
  const tempURL = url.split('/');
  const id = Number(tempURL[tempURL.length - 2]);
  if (id >= 10 && id < 100) {
    return `0${id}`;
  }
  if (id >= 100) {
    return `${id}`;
  }
  return `00${id}`;
};

export const getMegaEvolutionImage = (item: MegaChainPair, _id: number) => {
  const imageURL =
    'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';
  const id = getStringIDfromID(_id);
  if (!item.is_default) {
    const [, ...rest] = item.pokemon.name.split('-');
    const titleCase = rest
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('-');
    return `${imageURL}${id}-${titleCase}.png`;
  }

  return `${imageURL}${id}.png`;
};
