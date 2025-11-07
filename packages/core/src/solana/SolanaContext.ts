import { createContext } from "react";

export const SolanaContext = createContext({
  connectModalVisible: false,
  setConnectModalVisible: (visible: boolean) => {},
});
