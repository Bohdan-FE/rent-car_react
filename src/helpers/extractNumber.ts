export function extractNumberFromString(str: string) {
  const numberPattern = /\d+/;
  const match = str.match(numberPattern);
  return match ? match[0] : null;
}