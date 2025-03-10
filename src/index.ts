import { vIIN, gIIN } from "./kazakhstan/iin.js";
import { vBIN, gBIN } from "./kazakhstan/bin.js";
import { sTrimAll, sRemoveNonDigits, sExtractCodes } from "./sanitizers.js";

const vgscode = {
  gIIN,
  vIIN,
  gBIN,
  vBIN,
  sTrimAll,
  sRemoveNonDigits,
  sExtractCodes,
};

//export { vBIN, gBIN, vIIN, gIIN, sTrimAll, sRemoveNonDigits, sExtractCodes };
export default vgscode;
