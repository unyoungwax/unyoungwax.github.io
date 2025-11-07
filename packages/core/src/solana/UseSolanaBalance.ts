import { type PublicKey } from "@solana/web3.js";
import { useCallback, useMemo } from "react";
import { TokenSol } from "../entity/Token";
import { TokenAmount } from "../entity/TokenAmount";
import { useQueryData } from "../hook/UseQueryData";
import { useConnectionClient } from "./UseConnectionClient";

export function useSolanaBalance(owner: PublicKey | null | undefined) {
  const { connectionClient } = useConnectionClient();

  const queryFn = useCallback(() => {
    if (owner == null) {
      return TokenAmount.zero(TokenSol);
    }

    return connectionClient.getBalanceNative(owner);
  }, [owner, connectionClient]);

  const queryKey = useMemo(() => {
    return ["SolanaBalance", owner?.toString()];
  }, [owner]);

  const { data, query } = useQueryData({
    queryKey,
    queryFn,
    initialData: TokenAmount.zero(TokenSol),
  });

  return {
    balance: data,
    queryBalance: query,
  };
}
