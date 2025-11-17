export type SeedType = "PublicKey" | "String" | "u8";

export type Seed = {
  type: SeedType;
  input: string;
};
