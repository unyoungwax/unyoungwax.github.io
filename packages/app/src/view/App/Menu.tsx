import { LinkLocal } from "@web/core";
import { useMemo } from "react";
import { Pathname } from "../../entity/Pathname";

import styles from "./Menu.module.scss";

export type MenuProps = {
  className?: string;
};

export function Menu(props: MenuProps) {
  const { className } = props;

  const items = useMemo(() => {
    return [{
      href: Pathname.Base,
      label: "Base",
    }, {
      href: Pathname.Evm,
      label: "EVM",
    }, {
      href: Pathname.Solana.Wallet,
      label: "Solana",
    }, {
      href: Pathname.Solana.Pda,
      label: "PDA",
    }, {
      href: Pathname.Time,
      label: "Time",
    }, {
      href: Pathname.Window,
      label: "Window",
    }];
  }, []);

  return (
    <div className={className}>
      {
        items.map((item) => (
          <LinkLocal
            key={item.href}
            href={item.href}
            className={styles.item}
          >
            { item.label }
          </LinkLocal>
        ))
      }
    </div>
  );
}
