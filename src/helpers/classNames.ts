type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods).reduce((acc, [key, value]) => {
      const result = [...acc];
      if(value) {
        result.push(key);
      }
      return result;
    }, [] as string[])
  ].join(' ');
}