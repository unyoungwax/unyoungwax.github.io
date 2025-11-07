import { useCallback } from "react";
import { type Chain } from "viem";
import {
  useAccount,
  useConnect,
  useDisconnect,
  usePublicClient,
  useSwitchChain,
  useWalletClient,
} from "wagmi";

export function useEvmBlockchain() {
  const { chainId, address } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const { connectors, connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();

  const connect = useCallback(async (connectorId: string) => {
    try {
      const connector = connectors.find((item) => item.id === connectorId);

      if (connector == null) {
        throw new Error("connector is null.");
      }

      await connectAsync({
        connector,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(`Failed to connect wallet using ${connectorId}.`, e);

      throw e;
    }
  }, [connectors, connectAsync]);

  const disconnect = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Failed to disconnect.", e);

      throw e;
    }
  }, [disconnectAsync]);

  const switchChain = useCallback(async (newChain: Chain) => {
    try {
      await switchChainAsync({
        chainId: newChain.id,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(`Failed to switch chain to ${newChain.name}.`, e);

      throw e;
    }
  }, [switchChainAsync]);

  return {
    chainId,
    address,
    publicClient,
    walletClient,
    connect,
    disconnect,
    switchChain,
  };
}
