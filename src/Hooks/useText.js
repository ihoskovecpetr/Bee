import language from "../Data/language.json";

export const useText = () => {
  const text = code => {
    if (language[code]) {
      return language[code];
    } else {
      return code;
    }
  };

  return text;
};
