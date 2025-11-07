export type Token = {
  readonly mint: string;
  readonly decimals: number;
  readonly symbol: string;
};

export const TokenDefault: Token = {
  mint: "",
  decimals: 0,
  symbol: "",
};

export const TokenEth: Token = {
  mint: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  decimals: 18,
  symbol: "ETH",
};

export const TokenSol: Token = {
  mint: "So11111111111111111111111111111111111111112",
  decimals: 9,
  symbol: "SOL",
};

export const TokenWsol: Token = {
  mint: "So11111111111111111111111111111111111111112",
  decimals: 9,
  symbol: "WSOL",
};
