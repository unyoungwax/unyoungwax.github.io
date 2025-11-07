import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { Button, H1 } from "@web/core";
import { useCallback, useState } from "react";
import { Menu } from "./Menu";

import styles from "./Nav.module.scss";

export type NavProps = {
  isWide: boolean;
};

export function Nav(props: NavProps) {
  const { isWide } = props;

  return isWide ? <NavFull /> : <NavMobile />;
}

function NavFull() {
  return (
    <div className={styles.nav}>
      <H1 className={styles.title}>Misc Tool</H1>
    </div>
  );
}

function NavMobile() {
  const [visible, setVisible] = useState(false);

  const handleOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <div className={styles.nav}>
        <Button onClick={handleOpen} className={styles.button}>
          <MenuIcon />
        </Button>
        <H1 className={styles.title}>Misc Tool</H1>
      </div>
      <Drawer
        open={visible}
        onClose={handleClose}
      >
        <div onClick={handleClose} className={styles.content}>
          <Menu />
        </div>
      </Drawer>
    </>
  );
}
