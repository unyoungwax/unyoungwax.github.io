import styles from "./DetailRow.module.scss";

export type DetailRowProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

export function DetailRow(props: DetailRowProps) {
  const { title, description, children } = props;

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.title}>{ title }</div>
        { (description != null) && <div className={styles.description}>{ description }</div> }
      </div>
      { children }
    </div>
  );
}
