export const splitString = ({ str }: { str: string }): string[] => {
  const character: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(str)) != null) {
    character.push(match[0]);
  }

  return character;
};
