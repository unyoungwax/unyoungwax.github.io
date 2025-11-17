import { BN, utils } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

export type SeedType = "PublicKey" | "String" | "u8";

export type Seed = {
  type: SeedType;
  input: string;
};

export function getBuffer(seedInput: Seed) {
  switch (seedInput.type) {
    case "PublicKey":
      return new PublicKey(seedInput.input).toBuffer();

    case "String":
      return utils.bytes.utf8.encode(seedInput.input);

    case "u8":
      return new BN(seedInput.input).toArrayLike(Buffer, "be", 1);

    default:
      throw new Error("Unknown seed type.");
  }
}
