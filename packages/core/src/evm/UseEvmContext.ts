import { useContext } from "react";
import { EvmContext } from "./EvmContext";

export function useEvmContext() {
  const { connectModalVisible, setConnectModalVisible } = useContext(EvmContext);

  return {
    connectModalVisible,
    setConnectModalVisible,
  };
}
