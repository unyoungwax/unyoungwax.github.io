export function divSafe(numerator: number, denominator: number, defaultValue?: number): number {
  return (denominator === 0) ? (defaultValue ?? 0) : (numerator / denominator);
}

export function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export function unique<T>(items: T[], getKey: (item: T) => string): T[] {
  const map = new Map<string, T>();

  for (const item of items) {
    const key = getKey(item);

    if (!map.has(key)) {
      map.set(key, item);
    }
  }

  return Array.from(map.values());
}
