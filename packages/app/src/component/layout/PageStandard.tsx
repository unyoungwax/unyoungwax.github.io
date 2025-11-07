import { H2 } from "@web/core";

import styles from "./PageStandard.module.scss";

export type PageStandardProps = {
  title: string;
  children?: React.ReactNode;
};

export function PageStandard(props: PageStandardProps) {
  const { title, children } = props;

  return (
    <div>
      <H2 className={styles.title}>{ title }</H2>
      { children }
    </div>
  );
}
