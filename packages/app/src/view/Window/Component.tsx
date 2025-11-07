import { useWindowSize } from "@web/core";
import { DetailRow } from "../../component/layout/DetailRow";
import { PageStandard } from "../../component/layout/PageStandard";
import { TextCopy } from "../../component/layout/TextCopy";

import styles from "./Component.module.scss";

export function Component() {
  const { innerHeight, innerWidth, outerHeight, outerWidth } = useWindowSize();

  return (
    <PageStandard title="Window">
      <div className={styles.content}>
        <DetailRow title="window.innerHeight">
          <TextCopy>{ innerHeight }</TextCopy>
        </DetailRow>
        <DetailRow title="window.innerWidth">
          <TextCopy>{ innerWidth }</TextCopy>
        </DetailRow>
        <DetailRow title="window.outerHeight">
          <TextCopy>{ outerHeight }</TextCopy>
        </DetailRow>
        <DetailRow title="window.outerWidth">
          <TextCopy>{ outerWidth }</TextCopy>
        </DetailRow>
      </div>
    </PageStandard>
  );
}
