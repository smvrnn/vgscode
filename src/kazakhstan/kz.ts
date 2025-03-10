export function calculateControlDigit(str: string): number {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < 11; i++) {
    const digit = parseInt(str.charAt(i), 10);
    sum1 += digit * (i + 1);
    sum2 += digit * (i < 9 ? i + 3 : i === 9 ? 1 : 2);
  }

  let controlDigit = sum1 % 11;
  if (controlDigit === 10) {
    controlDigit = sum2 % 11;
  }
  return controlDigit === 10 ? 0 : controlDigit;
}
