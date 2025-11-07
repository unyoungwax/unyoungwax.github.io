import { useConnection } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { ConnectionClient } from "./ConnectionClient";

export function useConnectionClient() {
  const { connection } = useConnection();

  const connectionClient = useMemo(() => {
    return new ConnectionClient(connection);
  }, [connection]);

  return {
    connectionClient,
  };
}
