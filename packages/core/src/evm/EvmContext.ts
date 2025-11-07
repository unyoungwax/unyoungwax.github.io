import { createContext } from "react";

export const EvmContext = createContext({
  connectModalVisible: false,
  setConnectModalVisible: (visible: boolean) => {},
});
