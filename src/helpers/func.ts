export const getInitials = (name: string) => {
  const nameArr: string[] = name.split(' ');
  const letters = nameArr.map((word: string) => word.charAt(0));

  return letters.join('');
};
