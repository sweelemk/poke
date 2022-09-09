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
