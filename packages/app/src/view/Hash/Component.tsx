import { PageStandard } from "../../component/layout/PageStandard";

import styles from "./Component.module.scss";

export function Component() {
  return (
    <PageStandard title="Hash">
      <div className={styles.header}>Input</div>

    </PageStandard>
  );
}
