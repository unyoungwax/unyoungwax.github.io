import { gsap } from "gsap";
import { useEffect, useMemo, useState } from "react";
import { type Theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";

export type ThemeProviderProps = {
  themes: Theme[];
  cssVariableTarget: HTMLElement;
  children?: React.ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { themes, cssVariableTarget, children } = props;

  const defaultTheme = useMemo(() => {
    return themes[0];
  }, [themes]);

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    gsap.to(cssVariableTarget, {
      ...theme?.variables,
      duration: 0.2,
    });
  }, [cssVariableTarget, theme]);

  const value = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{ children }</ThemeContext.Provider>;
}
