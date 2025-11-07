import { SolanaConnectButton, useSolanaBalance, useSolanaBlockchain } from "@web/core";
import { DetailRow } from "../../component/layout/DetailRow";
import { PageStandard } from "../../component/layout/PageStandard";
import { TextCopy } from "../../component/layout/TextCopy";

import styles from "./Component.module.scss";

export function Component() {
  const { publicKey } = useSolanaBlockchain();
  const { balance } = useSolanaBalance(publicKey);

  return (
    <PageStandard title="Solana">
      <div className={styles.content}>
        <SolanaConnectButton />
        <DetailRow title="Public Key">
          <TextCopy>{ publicKey?.toString() }</TextCopy>
        </DetailRow>
        <DetailRow title="Balance (SOL)">
          <TextCopy>{ balance.formatExact() }</TextCopy>
        </DetailRow>
      </div>
    </PageStandard>
  );
}
