import { useContext, createContext } from "react";

export interface themeType {
  defualtTheme: string;
  lightMood: () => void;
  darkMood: () => void;
}
export const theme = createContext<themeType>({
  defualtTheme: "light",
  lightMood: () => {},
  darkMood: () => {},
} as themeType);

export const ThemeProvider = theme.Provider;

const useTheme = () => {
  return useContext(theme);
};
export default useTheme;
