function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17)); //false
console.log(isNumberNotInRange(10, 30, 5)); //true
console.log(isNumberNotInRange(20, 50, 24)); //false
console.log(isNumberNotInRange(20, 50, 76)); //true;
