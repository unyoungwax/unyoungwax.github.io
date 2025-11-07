export function copyText(text: string | null | undefined): Promise<void> {
  if (text == null) {
    return Promise.resolve();
  }

  return window.navigator.clipboard.writeText(text);
}

export function readText(): Promise<string> {
  return window.navigator.clipboard.readText();
}
