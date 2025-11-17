import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, useTheme } from "@web/core";
import { useCallback } from "react";
import { DarkTheme, LightTheme } from "../../entity/Theme";

import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = useCallback(() => {
    if (theme === LightTheme) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, [theme, setTheme]);

  return (
    <Button onClick={handleClick} className={styles.button}>
      {
        (theme === LightTheme) ? (
          <LightModeIcon fontSize="inherit" className={styles.icon} />
        ) : (
          <DarkModeIcon fontSize="inherit" className={styles.icon} />
        )
      }
    </Button>
  );
}
