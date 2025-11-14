export type EvmConnector = {
  readonly name: string;
  readonly connectorId: string;
};

const Injected: EvmConnector = {
  name: "Injected",
  connectorId: "injected",
};

const MetaMask: EvmConnector = {
  name: "MetaMask",
  connectorId: "metaMask",
};

export const evmConnectors = [
  Injected,
  MetaMask,
];
