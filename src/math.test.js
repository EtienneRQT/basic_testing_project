import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("---------Tests for add()--------", () => {
  it("should summarize all number values in an array", () => {
    // Arrange
    const numbers = [1, 2, 3];
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(6);
  });

  it("should yicleareld NaN if one invalid number is provided", () => {
    const inputs = ["invalid", 1];
    const result = add(inputs);
    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array of numerica string values is provided", () => {
    const numbers = ["1", "2"];
    const result = add(numbers);
    expect(result).toBe(3);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it("should throw an exception if no value is passed to the function", () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrowError();
  });

  it("should throw an error if provided with multiple argument instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
      add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/);
  });
});
