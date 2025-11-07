import { type DefinedInitialDataOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export function useQueryData<TQueryFnData>(options: DefinedInitialDataOptions<TQueryFnData>) {
  const { queryKey } = options;

  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery(options);

  const query = useCallback(() => {
    return queryClient.invalidateQueries({
      queryKey,
    });
  }, [queryClient, queryKey]);

  const setData = useCallback((updater: (cache: TQueryFnData) => TQueryFnData) => {
    return queryClient.setQueryData(queryKey, updater);
  }, [queryClient, queryKey]);

  return {
    data,
    setData,
    isFetching,
    query,
  };
}
