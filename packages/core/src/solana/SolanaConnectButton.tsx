import classNames from "classnames";
import { Button } from "../component/html/Button";
import { useSolanaBlockchain } from "./UseSolanaBlockchain";
import { useSolanaContext } from "./UseSolanaContext";

import styles from "./SolanaConnectButton.module.scss";

export type SolanaConnectButtonProps = {
  className?: string;
};

export function SolanaConnectButton(props: SolanaConnectButtonProps) {
  const { className } = props;

  const { publicKey, disconnect } = useSolanaBlockchain();
  const { setConnectModalVisible } = useSolanaContext();

  if (publicKey == null) {
    return (
      <Button
        onClick={() => setConnectModalVisible(true)}
        className={classNames(styles.button, className)}
      >
        Connect
      </Button>
    );
  }

  return (
    <Button
      onClick={disconnect}
      className={classNames(styles.button, className)}
    >
      Disconnect
    </Button>
  );
}
