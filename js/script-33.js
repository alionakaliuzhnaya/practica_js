//Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
//
//Дополни код функции так, что если длина строки:
//
//не превышает maxLength, функция возвращает её в исходном виде.
//больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
//Тесты
//Объявлена функция formatMessage(message, maxLength)

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length > maxLength) {
    result = `${message.slice(0, maxLength)}...`;
  } else {
    result = message;
  }

  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); //"Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); //"Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //"Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //"Nunc sed turpis a felis in nunc fringilla"
