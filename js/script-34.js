//Функция normalizeInput(input) принимает строку(параметр input)
//и возвращает такую же строку, но в нижнем регистре.
//Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

//Тесты
//Объявлена функция normalizeInput(input)

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

console.log(normalizeInput("Hello world")); // "hello world"
console.log(normalizeInput("This ISN'T SpaM")); //"this isn't spam"
console.log(normalizeInput("Big SALE")); // "big sale"
