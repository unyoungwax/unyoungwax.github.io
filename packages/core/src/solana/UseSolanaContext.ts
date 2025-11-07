import { useContext } from "react";
import { SolanaContext } from "./SolanaContext";

export function useSolanaContext() {
  const { connectModalVisible, setConnectModalVisible } = useContext(SolanaContext);

  return {
    connectModalVisible,
    setConnectModalVisible,
  };
}
