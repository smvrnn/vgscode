# VGSCode

**Validate • Generate • Sanitize Code**

VGSCode is a lightweight library that allows you to validate, generate, and sanitize various codes. Contributions are very welcome!

---

## Supported Countries & Codes

| Country    | Supported Codes    |
| ---------- | ------------------ |
| Kazakhstan | IIN, BIN           |
| ...        | (More coming soon) |

---

## Installation

Install via npm or pnpm:

```sh
npm install vgscode
```

or

```sh
pnpm install vgscode
```

---

## Usage

### ES6 Modules

Import the library in your project:

```js
import vgscode from "vgscode";
```

### CommonJS (Legacy)

For CommonJS projects, require the package:

```js
const vgscode = require("vgscode");
```

---

## Examples

### Validation

```js
// Validate BIN and IIN codes
vgscode.vBIN("320243026191"); // true
vgscode.vIIN("320229474023"); // false
```

### Generation

```js
// Generate complete codes by providing a prefix
vgscode.gBIN("320243"); // "320243952485"
vgscode.gIIN("320229"); // "320229980830"
```

### Sanitization

```js
// Remove all whitespace characters from the string
vgscode.sTrimAll("32 0229  4740 21"); // "320229474021"

// Remove all non-digit characters
vgscode.sRemoveNonDigits("320#%2294 74fwef021"); // "320229474021"

// Extract codes from a text
vgscode.sExtractCodes("Some text 320229474021 and more text", 12, vgscode.vBIN); //["320243026191"]
```

---

## Contributing

Contributions are encouraged! Feel free to submit issues or pull requests on [GitHub](https://github.com/smvrnn/vgscode).

---

## License

VGSCode is released under the [MIT License](./LICENSE).
