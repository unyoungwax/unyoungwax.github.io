import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { useMemo, useState } from "react";
import { SolanaConnectModal } from "./SolanaConnectModal";
import { SolanaContext } from "./SolanaContext";

export type SolanaProviderProps = {
  autoConnect?: boolean;
  children?: React.ReactNode;
};

export function SolanaProvider(props: SolanaProviderProps) {
  const { children } = props;

  const [connectModalVisible, setConnectModalVisible] = useState(false);

  const endpoint = useMemo(() => {
    return "https://api.mainnet-beta.solana.com";
  }, []);

  const value = useMemo(() => {
    return {
      connectModalVisible,
      setConnectModalVisible,
    };
  }, [connectModalVisible]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <SolanaContext.Provider value={value}>
          { children }
          <SolanaConnectModal />
        </SolanaContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
