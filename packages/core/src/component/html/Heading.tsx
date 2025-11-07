import styles from "./Heading.module.scss";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function H1(props: HeadingProps) {
  const { className = "" } = props;

  return <h1 {...props} className={`${styles.heading} ${className}`} />;
}

export function H2(props: HeadingProps) {
  const { className = "" } = props;

  return <h2 {...props} className={`${styles.heading} ${className}`} />;
}

export function H3(props: HeadingProps) {
  const { className = "" } = props;

  return <h3 {...props} className={`${styles.heading} ${className}`} />;
}
