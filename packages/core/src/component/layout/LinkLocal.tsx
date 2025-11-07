import { Link } from "react-router";

import styles from "./LinkLocal.module.scss";

export type LinkLocalProps = {
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function LinkLocal(props: LinkLocalProps) {
  const { href, className = "", style, children } = props;

  return (
    <Link
      to={href ?? "/"}
      className={`${styles.link} ${className}`}
      style={style}
    >
      { children }
    </Link>
  );
}
