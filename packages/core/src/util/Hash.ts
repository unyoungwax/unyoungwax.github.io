import { type Buffer } from "node:buffer";
import { createHash } from "node:crypto";

export function sha256(buffer: Buffer): Buffer {
  const hash = createHash("sha256");

  hash.update(buffer);

  return hash.digest();
}
