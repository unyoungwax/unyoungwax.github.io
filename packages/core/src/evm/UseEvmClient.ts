import { useMemo } from "react";
import { usePublicClient } from "wagmi";
import { EvmClient } from "./EvmClient";

export function useEvmClient() {
  const publicClient = usePublicClient();

  const evmClient = useMemo(() => {
    return (publicClient == null) ? null : new EvmClient(publicClient);
  }, [publicClient]);

  return {
    evmClient,
  };
}
