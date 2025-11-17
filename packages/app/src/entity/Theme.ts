import { type Theme } from "@web/core";

export const LightTheme: Theme = {
  name: "Light",
  variables: {
    "--palette-normal": "white",
    "--palette-normal-text": "black",
    "--palette-pane": "rgb(0 0 0 / 0.1)",
    "--palette-border": "rgb(191 191 191)",
    "--palette-shadow": "rgb(191 191 191)",
  },
};

export const DarkTheme: Theme = {
  name: "Dark",
  variables: {
    "--palette-normal": "#121212",
    "--palette-normal-text": "white",
    "--palette-pane": "rgb(255 255 255 / 0.1)",
    "--palette-border": "rgb(63 63 63)",
    "--palette-shadow": "rgb(63 63 63)",
  },
};

export const themes: Theme[] = [
  LightTheme,
  DarkTheme,
];
