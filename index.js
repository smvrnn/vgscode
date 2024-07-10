import { vIIN, gIIN } from './src/iin.js';
import { vBIN, gBIN } from './src/bin.js';
import { sNumberToString, sTrimStart, sTrimEnd, sTrimBoth, sTrimAll, sRemoveNonDigits } from './src/sanitizers.js';
// const { vIIN, gIIN } = require('./src/iin.js');
// const { vBIN, gBIN } = require('./src/bin.js');
// const { sNumberToString, sTrimStart, sTrimEnd, sTrimBoth, sTrimAll, sRemoveNonDigits } = require('./src/sanitizers.js');

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
    sRemoveNonDigits
}

export default vgscode;
//module.exports = vgscode