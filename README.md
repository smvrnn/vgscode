# VGSCode

Validate Generate Sanitize Code

List of supported codes:

1. Kazakhstan: IIN, BIN
2. ...

## Install

```sh
npm install vgscode

pnpm install vgscode
```

## Usage ES6

```javascript
import vgscode from "vgscode";
```

## Usage Legacy

```javascript
const vgscode = require("vgscode");
```

## Example

### validate

```javascript
vgscode.vBIN("320243026191"); //true
vgscode.vIIN("320229474023"); //false
```

### generate

```javascript
vgscode.gBIN("320243"); //320243952485
vgscode.gIIN("320229"); //320229980830
```

### sanitize

```javascript
vgscode.sNumberToString(320229474021); //320229474021
vgscode.sTrimStart("  320229474021"); //320229474021
vgscode.sTrimEnd("320229474021   "); //320229474021
vgscode.sTrimBoth("  320229474021  "); //320229474021
vgscode.sTrimAll("32 0229  4740 21"); //320229474021
vgscode.sRemoveNonDigits("320#%2294 74fwef021"); //320229474021
```
