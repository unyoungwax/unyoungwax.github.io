import { type Theme } from "@web/core";

export const LightTheme: Theme = {
  name: "Light",
  variables: {
    "--palette-normal": "white",
    "--palette-normal-text": "black",
    "--palette-pane": "rgb(0 0 0 / 0.1)",
    "--palette-shadow": "rgb(128 128 128)",
  },
};

export const DarkTheme: Theme = {
  name: "Dark",
  variables: {
    "--palette-normal": "#121212",
    "--palette-normal-text": "white",
    "--palette-pane": "rgb(255 255 255 / 0.1)",
    "--palette-shadow": "rgb(128 128 128)",
  },
};

export const themes: Theme[] = [
  LightTheme,
  DarkTheme,
];
