//Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

//Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
//Если в строке нет запрещенных слов, функция возвращает буль false.
//Тесты
//Объявлена функция checkForSpam(message).

function checkForSpam(message) {
  let result;
  // Change code below this line

  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");

  // Change code above this line
  return result;
}
console.log(checkForSpam("Latest technology news")); // возвращает false
console.log(checkForSpam("JavaScript weekly newsletter")); //возвращает false
console.log(checkForSpam("Get best sale offers now!")); // возвращает true
console.log(checkForSpam("Amazing SalE, only tonight!")); // возвращает true
console.log(checkForSpam("Trust me, this is not a spam message")); //возвращает true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // возвращает true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // возвращает true
