import { describe, it, expect } from "vitest";
import { calculateControlDigit } from "../src/kazakhstan/kz.js";

describe("calculateControlDigit", () => {
  it('should calculate the correct control digit for "12345678901"', () => {
    const input = "12345678901";
    const controlDigit = calculateControlDigit(input);
    expect(controlDigit).toBe(3);
  });

  it('should calculate the correct control digit for "12345678902"', () => {
    const input = "12345678902";
    const controlDigit = calculateControlDigit(input);
    expect(controlDigit).toBe(5);
  });
});
