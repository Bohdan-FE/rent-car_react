export function sortNumbersAscending(numbers: number[]): number[] {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  return sortedNumbers;
}