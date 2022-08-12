import { expect, it } from "vitest";
import { add } from "./math";

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
