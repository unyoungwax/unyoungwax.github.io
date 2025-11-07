export function stringToNumber(input: string, defaultValue = 0): number {
  try {
    const value = Number(input);

    return Number.isNaN(value) ? defaultValue : value;
  } catch {
    return defaultValue;
  }
}

export function commify(
  input: number | string,
  minimumFractionDigits = 0,
  maximumFractionDigits = minimumFractionDigits,
): string {
  const formatter = new Intl.NumberFormat("en", {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(Number(input));
}

export function formatPercentage(value: number, fractionDigits = 0): string {
  return `${(value * 100).toFixed(fractionDigits)}%`;
}

export function shortenNumber(num: number, fractionDigits = 0): string {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(fractionDigits) + "t";
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(fractionDigits) + "b";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(fractionDigits) + "m";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(fractionDigits) + "k";
  } else {
    return num.toFixed(fractionDigits);
  }
}

/**
 * @example
 * formatNumber(0, 4) // "0"
 * formatNumber(12345.12345, 4) // "12345.1234"
 * formatNumber(12345.12345, 6) // "12345.123450"
 * formatNumber(0.01, 4) // "0.0100"
 * formatNumber(0.001, 4) // "0.0₂1000"
 * formatNumber(0.0000012345, 4) // "0.0₅1234"
 * formatNumber(0.0000012345, 6) // "0.0₅123450"
 */
export function formatNumber(num: number, precision: number): string {
  if (num === 0) {
    return "0";
  }

  if (Math.abs(num) >= 0.01) {
    return num.toFixed(precision);
  }

  // exponent should be -3 or less.
  const { sign, digits, exponent } = exponentialParse(num, precision - 1);

  const subscript = subscriptOf(-exponent - 1);

  return `${sign}0.0${subscript}${digits}`;
}

export function exponentialParse(num: number, fractionDigits?: number) {
  const exponential = num.toExponential(fractionDigits);

  const [partValue, partExponent] = exponential.split("e");

  const value = partValue ?? "";

  return {
    sign: value.startsWith("-") ? "-" : "",
    digits: value.replace(".", "").replace("-", ""),
    exponent: Number(partExponent ?? "0"),
  };
}

function subscriptOf(digit: number): string {
  switch (digit) {
    case 0:
      return "\u2080";
    case 1:
      return "\u2081";
    case 2:
      return "\u2082";
    case 3:
      return "\u2083";
    case 4:
      return "\u2084";
    case 5:
      return "\u2085";
    case 6:
      return "\u2086";
    case 7:
      return "\u2087";
    case 8:
      return "\u2088";
    case 9:
      return "\u2089";
    default:
      return "";
  };
}
