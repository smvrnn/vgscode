import { describe, it, expect } from "vitest";
import {
  sTrimAll,
  sRemoveNonDigits,
  sExtractCodes,
} from "../src/sanitizers.js";

describe("Sanitizer functions", () => {
  it("should remove all whitespace with sTrimAll", () => {
    const input = " 123 456 789 ";
    expect(sTrimAll(input)).toBe("123456789");
  });

  it("should remove non-digit characters with sRemoveNonDigits", () => {
    const input = "abc123!@#456";
    expect(sRemoveNonDigits(input)).toBe("123456");
  });

  it("should extract valid codes with sExtractCodes", () => {
    const input = "Some text with 12345 and 67890";
    const validator = (code: string) => code.length === 5;
    const result = sExtractCodes(input, 5, validator);
    expect(result).toEqual(["12345", "67890"]);
  });

  it("should return an empty array if no valid codes are found", () => {
    const input = "No valid codes here";
    const validator = (code: string) => code.length === 5;
    const result = sExtractCodes(input, 5, validator);
    expect(result).toEqual([]);
  });
});
