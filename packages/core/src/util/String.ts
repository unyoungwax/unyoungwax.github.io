export function shortenString(text: string, numLeading = 0, numTrailing = 0): string {
  if (text.length <= numLeading + numTrailing) {
    return text;
  }

  return `${text.slice(0, numLeading)}...${text.slice(text.length - numTrailing)}`;
}

export function ellipsisTrailing(text: string, length: number): string {
  return (text.length <= length) ? text : `${text.slice(0, length)}...`;
}

export function getFilename(url: string): string {
  return url.substring(url.lastIndexOf("/") + 1);
}

export function equalsIgnoreCase(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase();
}

export function containsIgnoreCase(string: string, substring: string): boolean {
  return string.toLocaleLowerCase().includes(substring.toLocaleLowerCase());
}

export function regexCapture(text: string, regex: RegExp): string | undefined {
  return regex.exec(text)?.[1];
}

export function printSquareBracket(param: { [key: string]: unknown }): string {
  return Object.entries(param)
    .map(([key, value]) => `[${key}: ${String(value)}]`)
    .join("");
}
