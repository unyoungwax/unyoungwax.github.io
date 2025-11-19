import { type Buffer } from "node:buffer";
import { createHash } from "node:crypto";

export function hash(algorithm: string, buffer: Buffer): Buffer {
  const instance = createHash(algorithm);

  instance.update(buffer);

  return instance.digest();
}
