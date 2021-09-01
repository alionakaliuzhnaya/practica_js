//Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
// if (ordered > available) {message = "Not enough goods in stock!";} else {message = "The order is accepted, our manager will contact you";}

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50)); // is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
console.log(checkStorage(200, 20)); //The order is accepted, our manager will contact you"
console.log(checkStorage(200, 150)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(150, 180)); // "Not enough goods in stock!"
