import { useCallback, useMemo } from "react";
import { TokenEth, TokenSol } from "../entity/Token";
import { TokenAmount } from "../entity/TokenAmount";
import { useQueryData } from "../hook/UseQueryData";
import { useEvmClient } from "./UseEvmClient";

export function useEvmBalance(owner: string | null | undefined) {
  const { evmClient } = useEvmClient();

  const queryFn = useCallback(() => {
    if (owner == null || evmClient == null) {
      return TokenAmount.zero(TokenEth);
    }

    return evmClient.getBalanceNative(owner);
  }, [owner, evmClient]);

  const queryKey = useMemo(() => {
    return ["EvmBalance", owner];
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
