import { Big, type BigSource } from "big.js";
import { BigPrecise } from "../util/Big";
import { commify, shortenNumber } from "../util/Format";
import { type Token, TokenDefault } from "./Token";

export type TokenAmountOperand = TokenAmount | number;

function isTokenAmount(value: TokenAmountOperand): value is TokenAmount {
  return value instanceof TokenAmount;
}

function createBig(value: BigSource): Big {
  try {
    return new BigPrecise(value);
  } catch {
    return new BigPrecise(0);
  }
}

function getValue(amount: TokenAmountOperand): Big {
  return isTokenAmount(amount) ? amount.value : createBig(amount);
}

function convertUnit(input: string | number | null | undefined, decimals: number): Big {
  return createBig(input ?? 0).round(decimals, Big.roundDown);
}

function convertMinUnit(input: string | number | null | undefined, decimals: number): Big {
  return createBig(input ?? 0).div(createBig(10).pow(decimals)).round(decimals, Big.roundDown);
}

export class TokenAmount {
  public readonly token: Token;
  public readonly value: Big;

  private constructor(token: Token, value: Big) {
    this.token = token;
    this.value = value;
  }

  public static zero(token?: Token | null): TokenAmount {
    return new TokenAmount(token ?? TokenDefault, createBig(0));
  }

  // The maximum uint256 value on EVM.
  public static maxUint256(token?: Token | null): TokenAmount {
    return new TokenAmount(token ?? TokenDefault, createBig(2).pow(256).sub(1));
  }

  // The maximum u64 value on Solana.
  public static maxU64(token = TokenDefault): TokenAmount {
    return new TokenAmount(token, createBig(2).pow(64).sub(1));
  }

  public static fromNumber(token: Token | null | undefined, input: number | null | undefined): TokenAmount {
    const tokenOrDefault = token ?? TokenDefault;

    return new TokenAmount(tokenOrDefault, convertUnit(input, tokenOrDefault.decimals));
  }

  public static fromMinUnitNumber(token: Token | null | undefined, input: number | null | undefined): TokenAmount {
    const tokenOrDefault = token ?? TokenDefault;

    return new TokenAmount(tokenOrDefault, convertMinUnit(input, tokenOrDefault.decimals));
  }

  public static fromString(token: Token | null | undefined, input: string | null | undefined): TokenAmount {
    const tokenOrDefault = token ?? TokenDefault;

    return new TokenAmount(tokenOrDefault, convertUnit(input, tokenOrDefault.decimals));
  }

  public static fromMinUnitString(token: Token | null | undefined, input: string | null | undefined): TokenAmount {
    const tokenOrDefault = token ?? TokenDefault;

    return new TokenAmount(tokenOrDefault, convertMinUnit(input, tokenOrDefault.decimals));
  }

  public static fromBigInt(token: Token | null | undefined, input: bigint | null | undefined): TokenAmount {
    const tokenOrDefault = token ?? TokenDefault;

    return new TokenAmount(tokenOrDefault, convertMinUnit(input?.toString() ?? 0, tokenOrDefault.decimals));
  }

  public static min(a: TokenAmount, b: TokenAmount): TokenAmount {
    return a.lt(b) ? a : b;
  }

  public static max(a: TokenAmount, b: TokenAmount): TokenAmount {
    return a.lt(b) ? b : a;
  }

  public withToken(token: Token): TokenAmount {
    return new TokenAmount(token, this.value);
  }

  public toNumber(): number {
    return this.value.toNumber();
  }

  public toString(): string {
    return this.formatExactSymbol();
  }

  public toMinUnitString(): string {
    return this.value.mul(createBig(10).pow(this.token.decimals)).toFixed(0);
  }

  public toFixed(fractionDigits = 0): string {
    return this.value.toFixed(fractionDigits);
  }

  public toBigInt(): bigint {
    return BigInt(this.toMinUnitString());
  }

  // Returns a string with the number of decimal equal to the specified number of fraction digits.
  public format(fractionDigits = 0): string {
    return commify(this.value.toNumber(), fractionDigits);
  }

  public formatSymbol(fractionDigits = 0): string {
    return `${this.format(fractionDigits)} ${this.token.symbol}`;
  }

  // Returns a string with the number of decimal places equal to the token decimals.
  public formatExact(): string {
    return this.value.toFixed(this.token.decimals);
  }

  public formatExactSymbol(): string {
    return `${this.formatExact()} ${this.token.symbol}`;
  }

  // Returns a string with the necessary number of decimal places only.
  public formatNatural(): string {
    return this.value.toFixed();
  }

  public formatNaturalSymbol(): string {
    return `${this.formatNatural()} ${this.token.symbol}`;
  }

  public shorten(fractionDigits?: number): string {
    return shortenNumber(this.toNumber(), fractionDigits);
  }

  public shortenSymbol(fractionDigits?: number): string {
    return `${this.shorten(fractionDigits)} ${this.token.symbol}`;
  }

  public negate(): TokenAmount {
    return new TokenAmount(this.token, this.value.neg());
  }

  public add(amount: TokenAmountOperand): TokenAmount {
    return new TokenAmount(this.token, this.value.add(getValue(amount)));
  }

  public sub(amount: TokenAmountOperand): TokenAmount {
    return new TokenAmount(this.token, this.value.sub(getValue(amount)));
  }

  public mul(amount: TokenAmountOperand): TokenAmount {
    return new TokenAmount(this.token, this.value.mul(getValue(amount)));
  }

  public divSafe(amount: TokenAmountOperand): TokenAmount {
    const operand = getValue(amount);

    if (operand.eq(0)) {
      return TokenAmount.zero(this.token);
    }

    return new TokenAmount(this.token, this.value.div(operand));
  }

  public roundUp(fractionDigits = 0): TokenAmount {
    return new TokenAmount(this.token, this.value.round(fractionDigits, Big.roundUp));
  }

  public roundDown(fractionDigits = 0): TokenAmount {
    return new TokenAmount(this.token, this.value.round(fractionDigits, Big.roundDown));
  }

  public isZero(): boolean {
    return this.value.eq(0);
  }

  public eq(amount: TokenAmountOperand): boolean {
    return this.value.eq(getValue(amount));
  }

  public lt(amount: TokenAmountOperand): boolean {
    return this.value.lt(getValue(amount));
  }

  public lte(amount: TokenAmountOperand): boolean {
    return this.value.lte(getValue(amount));
  }

  public gt(amount: TokenAmountOperand): boolean {
    return this.value.gt(getValue(amount));
  }

  public gte(amount: TokenAmountOperand): boolean {
    return this.value.gte(getValue(amount));
  }
}
