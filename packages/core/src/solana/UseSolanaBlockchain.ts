import { type Adapter } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useCallback } from "react";

export function useSolanaBlockchain() {
  const { connection } = useConnection();
  const wallet = useWallet();

  const connect = useCallback(async (adapter: Adapter) => {
    wallet.select(adapter.name);

    if (adapter.name === "Mobile Wallet Adapter") {
      await wallet.connect();
    }
  }, [wallet]);

  const disconnect = useCallback(() => {
    return wallet.disconnect();
  }, [wallet]);

  return {
    connection,
    wallets: wallet.wallets,
    publicKey: wallet.publicKey,
    connect,
    disconnect,
  };
}
