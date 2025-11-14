import { useMemo, useState } from "react";
import { type HttpTransport } from "viem";
import { WagmiProvider, createConfig, http } from "wagmi";
import { bsc, mainnet, polygon, type Chain } from "wagmi/chains";
import { injected, safe } from "wagmi/connectors";
import { EvmConnectModal } from "./EvmConnectModal";
import { EvmContext } from "./EvmContext";

const connectors = [
  injected({
    shimDisconnect: true,
  }),
  injected({
    target: "metaMask",
    shimDisconnect: true,
  }),
  injected({
    target: "phantom",
    shimDisconnect: true,
  }),
  safe(),
];

export function EvmProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [connectModalVisible, setConnectModalVisible] = useState(false);

  const config = useMemo(() => {
    const chains: [Chain, ...Chain[]] = [
      mainnet,
      bsc,
      polygon,
    ];

    return createConfig({
      chains,
      transports: chains.reduce<{ [key: string]: HttpTransport }>((result, current) => {
        result[current.id] = http(undefined, {
          retryCount: 0, // No retry.
          timeout: 60 * 1000, // Requests time out after 1 minute.
        });

        return result;
      }, {}),
      connectors,
    });
  }, []);

  const value = useMemo(() => {
    return {
      connectModalVisible,
      setConnectModalVisible,
    };
  }, [connectModalVisible]);

  return (
    <WagmiProvider config={config}>
      <EvmContext.Provider value={value}>
        { children }
        <EvmConnectModal />
      </EvmContext.Provider>
    </WagmiProvider>
  );
}
