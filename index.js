import { vIIN, gIIN } from "./src/iin.js";
import { vBIN, gBIN } from "./src/bin.js";
import {
  sNumberToString,
  sTrimStart,
  sTrimEnd,
  sTrimBoth,
  sTrimAll,
  sRemoveNonDigits,
} from "./src/sanitizers.js";

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

export default vgscode;
