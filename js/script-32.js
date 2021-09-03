//const productName = "Repair droid";
//console.log(productName.slice(0, 4)); // "Repa"
//console.log(productName.slice(3, 9)); // "air dr"
//console.log(productName.slice(0, productName.length)); // "Repair droid"
//console.log(productName.slice(7, productName.length)); // "droid"
//
//
//функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
//
//string - оригинальная строка
//length - количество символов с начала строки для подстроки
//присвой переменной substring выражение создания подстроки длинной length символов(от начала) из строки string.

function getSubstring(string, length) {
  const substring = string.slice(1, length); // Change this line

  return substring;
}

console.log(getSubstring("Hello world", 3)); //"Hel"
console.log(getSubstring("Hello world", 6)); //"Hello"
console.log(getSubstring("Hello world", 8)); //"Hello wo"
console.log(getSubstring("Hello world", 11)); //"Hello world"
console.log(getSubstring("Hello world", 0)); // ""
