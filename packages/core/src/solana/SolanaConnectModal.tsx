import { type Adapter } from "@solana/wallet-adapter-base";
import { useCallback } from "react";
import { Button } from "../component/html/Button";
import { Modal } from "../component/layout/Modal";
import { useSolanaBlockchain } from "./UseSolanaBlockchain";
import { useSolanaContext } from "./UseSolanaContext";

import styles from "./SolanaConnectModal.module.scss";

export function SolanaConnectModal() {
  const { wallets, connect } = useSolanaBlockchain();
  const { connectModalVisible, setConnectModalVisible } = useSolanaContext();

  const handleConnect = useCallback(async (adapter: Adapter) => {
    try {
      await connect(adapter);

      setConnectModalVisible(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Failed to connect wallet.", e);
    }
  }, [setConnectModalVisible, connect]);

  return (
    <Modal
      visible={connectModalVisible}
      onVisibleChange={setConnectModalVisible}
      width={500}
      showCloseButton
    >
      <div className={styles.content}>
        <div className={styles.title}>Connect Wallet</div>
        <div>
          {
            wallets.map((item) => (
              <Button
                key={item.adapter.name}
                onClick={() => handleConnect(item.adapter)}
                className={styles.option}
              >
                <img src={item.adapter.icon} alt="" className={styles.image} />
                <div>{ item.adapter.name }</div>
              </Button>
            ))
          }
        </div>
      </div>
    </Modal>
  );
}
