import classNames from "classnames";
import { Button } from "../component/html/Button";
import styles from "./EvmConnectButton.module.scss";
import { useEvmBlockchain } from "./UseEvmBlockchain";
import { useEvmContext } from "./UseEvmContext";

export type EvmConnectButtonProps = {
  className?: string;
};

export function EvmConnectButton(props: EvmConnectButtonProps) {
  const { className } = props;

  const { address, disconnect } = useEvmBlockchain();
  const { setConnectModalVisible } = useEvmContext();

  if (address == null) {
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
