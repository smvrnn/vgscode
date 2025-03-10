import { describe, it, expect } from "vitest";
import { vBIN, gBIN } from "../src/kazakhstan/bin.js";

describe("BIN functions", () => {
  it("should validate a correct BIN", () => {
    const validBIN = "410652378403";
    expect(vBIN(validBIN)).toBe(true);
  });

  it("should invalidate an incorrect BIN", () => {
    const invalidBIN = "080840005950";
    expect(vBIN(invalidBIN)).toBe(false);
  });

  it("should generate a valid BIN", () => {
    const generatedBIN = gBIN();
    expect(vBIN(generatedBIN)).toBe(true);
  });

  it("should throw an error for invalid input in gBIN", () => {
    expect(() => gBIN("1234567890123")).toThrow(); // Слишком длинный BIN
  });
});
