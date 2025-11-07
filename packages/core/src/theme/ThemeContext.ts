import { createContext } from "react";
import { type Theme } from "./Theme";

export const ThemeContext = createContext({
  theme: undefined as Theme | undefined,
  setTheme: (theme: Theme | undefined) => {},
});
