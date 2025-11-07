import { ASSOCIATED_TOKEN_PROGRAM_ID, NATIVE_MINT, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_INSTRUCTIONS_PUBKEY, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";

export const PublicKeys = {
  Default: PublicKey.default,
  SystemProgram: SystemProgram.programId,
  SysvarClock: SYSVAR_CLOCK_PUBKEY,
  SysvarInstructions: SYSVAR_INSTRUCTIONS_PUBKEY,
  SysvarRent: SYSVAR_RENT_PUBKEY,
  TokenProgram: TOKEN_PROGRAM_ID,
  AssociatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
  NativeMint: NATIVE_MINT,
};
