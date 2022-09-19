import {convertHexToRGBA, getPokeColor} from '../helpers';

export const usePokemonGradient = () => {
  const getGradient = (type: string) => {
    const hexColor = getPokeColor(type);
    const rgbaColor = convertHexToRGBA(hexColor, 0.4);
    return [rgbaColor, hexColor];
  };

  return {
    getGradient,
  };
};
