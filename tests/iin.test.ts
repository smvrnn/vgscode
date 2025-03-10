import { describe, it, expect } from "vitest";
import { vIIN, gIIN } from "../src/kazakhstan/iin.js";

describe("IIN functions", () => {
  it("should validate a correct IIN", () => {
    const validIIN = "350115350777";
    expect(vIIN(validIIN)).toBe(true);
  });

  it("should invalidate an incorrect IIN", () => {
    const invalidIIN = "123456789010";
    expect(vIIN(invalidIIN)).toBe(false);
  });

  it("should generate a valid IIN", () => {
    const generatedIIN = gIIN();
    expect(vIIN(generatedIIN)).toBe(true);
  });

  it("should throw an error for invalid input in gIIN", () => {
    expect(() => gIIN("1234567890123")).toThrow();
  });
});
