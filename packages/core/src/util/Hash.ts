import { type Buffer } from "node:buffer";
import { createHash } from "node:crypto";

export const HashAlgorithm = {
  md5: "md5",
  sha256: "sha256",
  sha512: "sha512",
} as const;

export function hash(algorithm: string, buffer: Buffer): Buffer {
  const instance = createHash(algorithm);

  instance.update(buffer);

  return instance.digest();
}
