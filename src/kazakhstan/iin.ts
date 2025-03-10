import { calculateControlDigit } from "./kz.js";

export function gIIN(value: string | number = ""): string {
  let str = typeof value === "string" ? value : String(value);

  if (!/^\d*$/.test(str) || str.length > 11) {
    throw new Error("Input value must be a 'string'/number of 0 to 11 digits");
  }

  while (str.length < 4) {
    str += Math.floor(Math.random() * 10).toString();
  }

  if (str.length === 4) {
    str += Math.floor(Math.random() * 4).toString();
  }

  if (str.length >= 5) {
    const fifthDigit = parseInt(str.charAt(4), 10);
    if (isNaN(fifthDigit) || fifthDigit < 0 || fifthDigit > 3) {
      throw new Error("The 5th digit must be 0, 1, 2, or 3");
    }
  }

  while (str.length < 11) {
    str += Math.floor(Math.random() * 10).toString();
  }

  const controlDigit = calculateControlDigit(str);

  return str + controlDigit.toString();
}

export function vIIN(value: string | number): boolean {
  const str = typeof value === "string" ? value : String(value);
  if (str.length !== 12) return false;

  const fifthDigit = parseInt(str.charAt(4), 10);
  if (isNaN(fifthDigit) || fifthDigit < 0 || fifthDigit > 3) return false;

  return calculateControlDigit(str) === parseInt(str.charAt(11), 10);
}

export default { vIIN, gIIN };
