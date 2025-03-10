import { calculateControlDigit } from "./kz.js";

export function gBIN(value: string | number = ""): string {
  let str = typeof value === "string" ? value : String(value);

  if (str.length > 11 || !/^\d*$/.test(str)) {
    throw new Error("Input value must be a 'string'/number of 0 to 11 digits");
  }

  if (str.length >= 4) {
    const month = (str.charCodeAt(2) - 48) * 10 + (str.charCodeAt(3) - 48);
    if (month < 1 || month > 12) {
      throw new Error(
        "The 3rd and 4th digits must represent a valid month (01-12)"
      );
    }
  }

  if (str.length >= 5 && ![4, 5, 6].includes(str.charCodeAt(4) - 48)) {
    throw new Error("The 5th digit must be 4, 5, or 6");
  }

  if (str.length >= 6 && ![0, 1, 2, 3].includes(str.charCodeAt(5) - 48)) {
    throw new Error("The 6th digit must be 0, 1, 2, or 3");
  }

  while (str.length < 11) {
    str +=
      str.length === 2
        ? ("0" + (Math.floor(Math.random() * 12) + 1)).slice(-2)
        : str.length === 4
        ? (4 + Math.floor(Math.random() * 3)).toString()
        : str.length === 5
        ? Math.floor(Math.random() * 4).toString()
        : Math.floor(Math.random() * 10).toString();
  }

  return str + calculateControlDigit(str);
}

export function vBIN(value: string | number): boolean {
  const str = typeof value === "string" ? value : String(value);
  if (!/^\d{12}$/.test(str)) return false;

  const month = (str.charCodeAt(2) - 48) * 10 + (str.charCodeAt(3) - 48);
  if (month < 1 || month > 12) return false;

  if (![4, 5, 6].includes(str.charCodeAt(4) - 48)) return false;
  if (![0, 1, 2, 3].includes(str.charCodeAt(5) - 48)) return false;

  return calculateControlDigit(str) === str.charCodeAt(11) - 48;
}

export default { vBIN, gBIN };
