export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    try {
      sum += parseInt(number);
    } catch (err) {
      console.log("An error occured", err);
    }
  }
  return sum;
}
