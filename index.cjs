'use strict';

function sNumberToString(str) {
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

function sTrimStart(str) {
  var i = 0;
  var ws = /\s/;

  while (ws.test(str.charAt(i))) {
    i++;
  }

  return str.slice(i);
}

function sTrimEnd(str) {
  var i = str.length - 1;
  var ws = /\s/;

  while (ws.test(str.charAt(i))) {
    i--;
  }

  return str.slice(0, i + 1);
}

function sTrimBoth(str) {
  var str = str.replace(/^\s\s*/, ""),
    ws = /\s/,
    i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}
// https://blog.stevenlevithan.com/archives/faster-trim-javascript

function sTrimAll(str) {
  return str.replace(/\s/g, "");
}

function sRemoveNonDigits(str) {
  return str.replace(/\D/g, "");
}

function gIIN(str = "") {
  sNumberToString(str);

  if (typeof str !== "string" || str.length > 11 || !/^\d*$/.test(str)) {
    throw new Error("Input value must be a 'string'/number of 0 to 11 digits");
  }

  if (str.length >= 5) {
    const fifthDigit = parseInt(str[4], 10);
    if (![0, 1, 2, 3].includes(fifthDigit)) {
      throw new Error("The 5th digit must be 0, 1, 2, or 3");
    }
  }

  while (str.length < 11) {
    if (str.length === 4) {
      str += Math.floor(Math.random() * 4).toString();
    } else {
      str += Math.floor(Math.random() * 10).toString();
    }
  }

  const mainCode = str.split("").map(Number);

  const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const weights2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];

  function calculateSum(code, weights) {
    return code.reduce((sum, digit, index) => sum + digit * weights[index], 0);
  }

  let controlDigit = calculateSum(mainCode, weights1) % 11;

  if (controlDigit === 10) {
    controlDigit = calculateSum(mainCode, weights2) % 11;
  }

  if (controlDigit === 10) {
    controlDigit = 0;
  }

  return str + controlDigit.toString();
}

function vIIN(str) {
  sNumberToString(str);

  if (str.length !== 12) {
    return false;
    //throw new Error("IIN code must be a 'string'/number of 12 digits");
  }

  const code = str.split("").map(Number);

  const fifthDigit = code[4];
  if (![0, 1, 2, 3].includes(fifthDigit)) {
    return false;
    //throw new Error("The 5th digit must be 0, 1, 2, or 3");
  }

  const mainCode = code.slice(0, 11);
  const controlDigitFromStr = code[11];

  const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const weights2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];

  function calculateSum(code, weights) {
    return code.reduce((sum, digit, index) => sum + digit * weights[index], 0);
  }

  let controlDigit = calculateSum(mainCode, weights1) % 11;

  if (controlDigit === 10) {
    controlDigit = calculateSum(mainCode, weights2) % 11;
  }

  if (controlDigit === 10) {
    controlDigit = 0;
  }

  return controlDigit === controlDigitFromStr;
}

function gBIN(str = "") {
  str = sNumberToString(str);

  if (typeof str !== "string" || str.length > 11 || !/^\d*$/.test(str)) {
    throw new Error("Input value must be a 'string'/number of 0 to 11 digits");
  }

  if (str.length >= 4) {
    const month = parseInt(str.substring(2, 4), 10);
    if (month < 1 || month > 12) {
      throw new Error(
        "The 3rd and 4th digits must represent a valid month (01-12)"
      );
    }
  }

  if (str.length >= 5) {
    const fifthDigit = parseInt(str[4], 10);
    if (![4, 5, 6].includes(fifthDigit)) {
      throw new Error("The 5th digit must be 4, 5, or 6");
    }
  }

  if (str.length >= 6) {
    const sixthDigit = parseInt(str[5], 10);
    if (![0, 1, 2, 3].includes(sixthDigit)) {
      throw new Error("The 6th digit must be 0, 1, 2, or 3");
    }
  }

  while (str.length < 11) {
    if (str.length === 2) {
      const month = (Math.floor(Math.random() * 12) + 1)
        .toString()
        .padStart(2, "0");
      str += month;
    } else if (str.length === 4) {
      str += (4 + Math.floor(Math.random() * 3)).toString();
    } else if (str.length === 5) {
      str += Math.floor(Math.random() * 4).toString();
    } else {
      str += Math.floor(Math.random() * 10).toString();
    }
  }

  const mainCode = str.split("").map(Number);

  const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const weights2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];

  function calculateSum(code, weights) {
    return code.reduce((sum, digit, index) => sum + digit * weights[index], 0);
  }

  let controlDigit = calculateSum(mainCode, weights1) % 11;

  if (controlDigit === 10) {
    controlDigit = calculateSum(mainCode, weights2) % 11;
  }

  if (controlDigit === 10) {
    controlDigit = 0;
  }

  return str + controlDigit.toString();
}

function vBIN(str) {
  str = sNumberToString(str);

  if (str.length !== 12) {
    return false;
    //throw new Error("BIN code must be a 'string'/number of 12 digits");
  }

  const code = str.split("").map(Number);

  const month = parseInt(str.substring(2, 4), 10);
  if (month < 1 || month > 12) {
    return false;
    //throw new Error("The 3rd and 4th digits must represent a valid month (01-12)");
  }

  const fifthDigit = code[4];
  if (![4, 5, 6].includes(fifthDigit)) {
    return false;
    //throw new Error("The 5th digit must be 4, 5, or 6");
  }

  const sixthDigit = code[5];
  if (![0, 1, 2, 3].includes(sixthDigit)) {
    return false;
    //throw new Error("The 6th digit must be 0, 1, 2, or 3");
  }

  const mainCode = code.slice(0, 11);
  const controlDigitFromStr = code[11];

  const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const weights2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];

  function calculateSum(code, weights) {
    return code.reduce((sum, digit, index) => sum + digit * weights[index], 0);
  }

  let controlDigit = calculateSum(mainCode, weights1) % 11;

  if (controlDigit === 10) {
    controlDigit = calculateSum(mainCode, weights2) % 11;
  }

  if (controlDigit === 10) {
    controlDigit = 0;
  }

  return controlDigit === controlDigitFromStr;
}

const vgscode = {
  gIIN,
  vIIN,
  gBIN,
  vBIN,
  sNumberToString,
  sTrimStart,
  sTrimEnd,
  sTrimBoth,
  sTrimAll,
  sRemoveNonDigits,
};

module.exports = vgscode;
