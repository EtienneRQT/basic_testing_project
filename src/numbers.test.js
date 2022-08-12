import { describe, expect, it } from "vitest";
import { transformToNumber } from "./numbers";

describe("---------Tests for transformToNumber()--------", () => {
  it("should return a number if the value passed can be converted to a number", () => {
    const value = "123";
    const result = transformToNumber(value);
    expect(result).toBe(123);
  });

  it("should return NaN if the value passed cannot be converted", () => {
    const value = "invalid";
    const result = transformToNumber(value);
    expect(result).toBeNaN();
  });
});
