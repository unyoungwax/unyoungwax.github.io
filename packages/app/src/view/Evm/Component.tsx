import { EvmConnectButton, useEvmBalance, useEvmBlockchain } from "@web/core";
import { DetailRow } from "../../component/layout/DetailRow";
import { PageStandard } from "../../component/layout/PageStandard";
import { TextCopy } from "../../component/layout/TextCopy";

import styles from "./Component.module.scss";

export function Component() {
  const { address } = useEvmBlockchain();
  const { balance } = useEvmBalance(address);

  return (
    <PageStandard title="EVM">
      <div className={styles.content}>
        <EvmConnectButton />
        <DetailRow title="Address">
          <TextCopy>{ address }</TextCopy>
        </DetailRow>
        <DetailRow title="Balance (ETH)">
          <TextCopy>{ balance.formatExact() }</TextCopy>
        </DetailRow>
      </div>
    </PageStandard>
  );
}
