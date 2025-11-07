export class Base {
  public readonly radix: bigint;
  public readonly symbols: string;

  public constructor(option: {
    radix: bigint;
    symbols: string;
  }) {
    this.radix = option.radix;
    this.symbols = option.symbols;
  }

  public fromBigInt(value: bigint): string {
    const result = [];

    let current = value;

    do {
      const quotient = current / this.radix;
      const remainder = current % this.radix;

      const symbol = this.symbols.at(Number(remainder));

      result.push(symbol);

      current = quotient;
    } while (current > 0);

    return result.toReversed().join("");
  }

  public toBigInt(string: string): bigint {
    return string.split("")
      .map((symbol, index) => {
        const symbolIndex = this.symbols.indexOf(symbol);

        if (symbolIndex < 0) {
          throw new Error(`Invalid symbol ${symbol}.`);
        }

        const exponent = BigInt(string.length - index - 1);

        return BigInt(symbolIndex) * this.radix ** exponent;
      })
      .reduce((result, current) => result + current, 0n);
  }
}

export const Base2 = new Base({
  radix: 2n,
  symbols: "01",
});

export const Base10 = new Base({
  radix: 10n,
  symbols: "0123456789",
});

export const Base16 = new Base({
  radix: 16n,
  symbols: "0123456789abcdef",
});
