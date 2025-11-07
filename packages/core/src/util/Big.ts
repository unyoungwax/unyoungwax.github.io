import { Big } from "big.js";

export { Big } from "big.js";

export function createBig(dp: number) {
  const BigConstructor = Big();

  // Set the maximum number of decimal places of the results of operations involving division, i.e.
  // div, sqrt, pow (negative exponent) methods.
  BigConstructor.DP = dp;

  return BigConstructor;
}

export const BigPrecise = /* #__PURE__ */ createBig(40);

export const BigZero = new BigPrecise(0);
