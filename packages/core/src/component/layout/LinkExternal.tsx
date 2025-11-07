import styles from "./LinkExternal.module.scss";

export type LinkExternalProps = {
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function LinkExternal(props: LinkExternalProps) {
  const { href, className = "", style, children } = props;

  return (
    <a
      href={href}
      className={`${styles.link} ${className}`}
      style={style}
    >
      { children }
    </a>
  );
}
