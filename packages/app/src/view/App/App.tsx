import { useWindowSize } from "@web/core";
import { useMemo } from "react";
import { Outlet } from "react-router";
import { Menu } from "./Menu";
import { Nav } from "./Nav";

import styles from "./App.module.scss";

export function App() {
  const { innerWidth } = useWindowSize();

  const isWide = useMemo(() => {
    return innerWidth > 900;
  }, [innerWidth]);

  if (isWide) {
    return (
      <div>
        <Nav isWide={isWide} />
        <div className={styles.columns}>
          <Menu />
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav isWide={isWide} />
      <div className={styles.column}>
        <Outlet />
      </div>
    </div>
  );
}
