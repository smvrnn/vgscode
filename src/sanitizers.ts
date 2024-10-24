export function sNumberToString(str: number | string) {
  if (typeof str === "number") {
    return (str = str + "");
  } else if (typeof str === "string") {
    return str;
  } else {
    throw new TypeError(
      `Expected a 'string'/number but received a ${typeof str}`
    );
  }
}

export function sTrimStart(str: string) {
  var i = 0;
  var ws = /\s/;

  while (ws.test(str.charAt(i))) {
    i++;
  }

  return str.slice(i);
}

export function sTrimEnd(str: string) {
  var i = str.length - 1;
  var ws = /\s/;

  while (ws.test(str.charAt(i))) {
    i--;
  }

  return str.slice(0, i + 1);
}

export function sTrimBoth(str: string) {
  var str = str.replace(/^\s\s*/, ""),
    ws = /\s/,
    i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}
// https://blog.stevenlevithan.com/archives/faster-trim-javascript

export function sTrimAll(str: string) {
  return str.replace(/\s/g, "");
}

export function sRemoveNonDigits(str: string) {
  return str.replace(/\D/g, "");
}

export default {
  sNumberToString,
  sTrimStart,
  sTrimEnd,
  sTrimBoth,
  sTrimAll,
  sRemoveNonDigits,
};
