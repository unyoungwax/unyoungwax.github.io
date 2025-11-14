import { useCallback } from "react";
import { Button } from "../component/html/Button";
import { Modal } from "../component/layout/Modal";
import { evmConnectors } from "./EvmConnector";
import { useEvmBlockchain } from "./UseEvmBlockchain";
import { useEvmContext } from "./UseEvmContext";

import styles from "./EvmConnectModal.module.scss";

export function EvmConnectModal() {
  const { connect } = useEvmBlockchain();
  const { connectModalVisible, setConnectModalVisible } = useEvmContext();

  const handleConnect = useCallback(async (connectorId: string) => {
    try {
      await connect(connectorId);

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
            evmConnectors.map((item) => (
              <Button
                key={item.connectorId}
                onClick={() => handleConnect(item.connectorId)}
                className={styles.option}
              >
                <div>{ item.name }</div>
              </Button>
            ))
          }
        </div>
      </div>
    </Modal>
  );
}
