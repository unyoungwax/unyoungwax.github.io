import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, LinkLocal } from "@web/core";
import { useCallback, useMemo, useState } from "react";
import { Pathname } from "../../entity/Pathname";

import styles from "./Menu.module.scss";

export type MenuEntry = {
  readonly href: string;
  readonly label: string;
  readonly children?: MenuEntry[];
};

export type MenuProps = {
  className?: string;
};

export function Menu(props: MenuProps) {
  const { className } = props;

  const entries: MenuEntry[] = useMemo(() => {
    return [{
      href: Pathname.Base,
      label: "Base",
    }, {
      href: Pathname.Hash,
      label: "Hash",
    }, {
      href: Pathname.Evm,
      label: "EVM",
    }, {
      href: Pathname.Solana.Wallet,
      label: "Solana",
      children: [{
        href: Pathname.Solana.Wallet,
        label: "Wallet",
      }, {
        href: Pathname.Solana.Pda,
        label: "PDA",
      }],
    }, {
      href: Pathname.Time,
      label: "Time",
    }, {
      href: Pathname.Window,
      label: "Window",
    }];
  }, []);

  return (
    <MenuItems entries={entries} className={className} />
  );
}

function MenuItems(props: {
  entries: MenuEntry[];
  className?: string;
}) {
  const { entries, className } = props;

  return (
    <div className={className}>
      {
        entries.map((entry) => {
          if (entry.children == null || entry.children.length <= 0) {
            return (
              <LinkLocal
                key={entry.href}
                href={entry.href}
                className={styles.item}
              >
                { entry.label }
              </LinkLocal>
            );
          }

          return (
            <Submenu key={entry.href} entry={entry} />
          );
        })
      }
    </div>
  );
}

function Submenu(props: {
  entry: MenuEntry;
}) {
  const { entry } = props;

  const [visible, setVisible] = useState(false);

  const handleToggle = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <>
      <Button onClick={handleToggle} className={styles.item}>
        <span>{ entry.label }</span>
        <KeyboardArrowDownIcon fontSize="inherit" />
      </Button>
      {
        visible && (
          <div className={styles.container}>
            <MenuItems entries={entry.children ?? []} className={styles.content} />
          </div>
        )
      }
    </>
  );
}
