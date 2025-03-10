export function sTrimAll(str: string) {
  return str.replace(/\s/g, "");
}

export function sRemoveNonDigits(str: string) {
  return str.replace(/\D/g, "");
}

type ValidatorFn = (code: string) => boolean;

export function sExtractCodes(
  text: string,
  length: number,
  validator: ValidatorFn
): string[] {
  const validCodes = new Array<string>(); //new Set<string>();
  const numberSequences = text.match(/\d+/g) || [];

  for (const sequence of numberSequences) {
    if (sequence.length >= length) {
      for (let i = 0; i <= sequence.length - length; i++) {
        const possibleCode = sequence.slice(i, i + length);
        if (validator(possibleCode)) {
          validCodes.push(possibleCode); //.add
        }
      }
    }
  }

  return Array.from(validCodes);
}

export default {
  sTrimAll,
  sRemoveNonDigits,
  sExtractCodes,
};
