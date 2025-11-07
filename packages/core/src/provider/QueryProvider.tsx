import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";

export type QueryProviderProps = {
  children?: React.ReactNode;
};

export function QueryProvider(props: QueryProviderProps) {
  const { children } = props;

  const client = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 0,
          networkMode: "always",
          refetchOnMount: true,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          retry: false,
          structuralSharing: false, // Always return new references for new data.
        },
      },
    });
  }, []);

  return <QueryClientProvider client={client}>{ children }</QueryClientProvider>;
}
