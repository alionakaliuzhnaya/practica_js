//Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.
//
//fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
//name - имя для проверки вхождения в полное имя.
//Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.
//
//Тесты
//Объявлена функция checkForName(fullname, name).

//function checkForName(fullName, name) {
//  const result = fullName.includes(`${name}`); // Change this line
//  return result;
//}
//
//console.log(checkForName("Egor Kolbasov", "Egor")); //возвращает true
//console.log(checkForName("Egor Kolbasov", "egor")); //возвращает false
//console.log(checkForName("Egor Kolbasov", "egOr")); //возвращает false
//console.log(checkForName("Egor Kolbasov", "Zhenya")); // возвращает false
//console.log(checkForName("Vadim Nekrasov", "Vadim")); // возвращает true
//console.log(checkForName("Vadim Nekrasov", "vadim")); //возвращает false
//console.log(checkForName("Vadim Nekrasov", "Dima")); //возвращает false

//function createArray(N) {
//  let result =[];
//  if(N===0){
//    return [];
//  }
//  for(let i=1;i<=N;i++){
//    result.push(i)
//  }
//  return result
// }
//
//console.log(createArray(1))// === [1]
//console.log(createArray(3))// === [1, 2, 3]
//console.log(createArray(0))// === []

//function makeStickers(detailsCount, robotPart) {
//  let result=[];
//  if(detailsCount===0){
//    return[];
//  }
//  for(let i=1;i<=detailsCount;i++){
//    result.push(`${robotPart} details # ${i}`)
//  }
//  return result
//}
//
//console.log(makeStickers(3, 'Body'))// === ['Body detail #1', 'Body detail #2', 'Body detail #3']
//console.log(makeStickers(4, 'Head'))// === ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
//console.log(makeStickers(0, 'Foot'))// === []

//function doublePower(currentPowers) {
//  let result =[]
// 
//  for(let i=0;i<currentPowers.length;i++){
//    result.push(currentPowers[i]*2)
//  }
//  return result
// }
//
// 
//console.log(doublePower([100, 150, 200, 220]))//=== [200, 300, 400, 440]
//console.log(doublePower([45, 34, 56, 67]))// === [90, 68, 112, 134]
//console.log(doublePower([]))// === []

//function isSorted(boxNumbers) {
// if(boxNumbers===0){
//   return false
// }
//
//  for(let i=1;i<boxNumbers.length;i++){
//  if(boxNumbers[i-1]>boxNumbers[i]){
//   return false
//  }
//  }
//  return true
//}
//
//
//console.log(isSorted([1, 2, 3, 4, 5]))// === true
//console.log(isSorted([0, 1, 1, 1, 2]))// === true
//console.log(isSorted([1, 2, 11]))// === true
//console.log(isSorted([5]))//=== true
//console.log(isSorted([]))// === true
//console.log(isSorted([0, 3, 1, 2, 2, 2]))// === false
//console.log(isSorted([1, 11, 2]) )//=== false

//function getPlan(startProduction, numberOfMonths, percent) {
//  let goals =[];
//  let currentProduction=startProduction;
//   for(let i=1;i<=numberOfMonths;i++){
//     goals.push(currentProduction+=Math.floor((percent/100)*currentProduction))
//     
//   }
//   return goals
// }
//
//console.log(getPlan(200, 3, 50))//=== [300, 450, 675]
//console.log(getPlan(10, 4, 30) )//== [13, 16, 20, 26]
//console.log(getPlan(1000, 6, 20))//=== [1200, 1440, 1728, 2073, 2487, 2984]

//function getSpeedStatistic(testResults) {
//
//  let max=testResults[0];
//  let min=testResults[0];
//  let sum= 0;
//  let average=0;
//
//  if(testResults.length===0){
//    return [0,0,0]
//  }
//
//for (let i=1;i<testResults.length;i++){
//  if(testResults[i]>max){
//    max=testResults[i]
//  }
//  if(testResults[i]<min){
//    min=testResults[i]
//  }}
//
//  for(let n of testResults){
//    sum+=n;
//  }
//   
// 
// average=sum/testResults.length;
//
//return [min,max,Math.floor(average)]
//}
//
//console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8]))// === [8, 12, 10]
//console.log(getSpeedStatistic([10]))// === [10, 10, 10]
//console.log(getSpeedStatistic([]))// === [0, 0, 0]
//console.log(getSpeedStatistic([8, 9, 3, 12]))// === [3, 12, 8]
//console.log(getSpeedStatistic([5]))// === [5, 5, 5]


//function compareRobots(firstRobotResults, secondRobotResults) {
//  let first =0;
//  let second =0;
//   for (let i=0;i<firstRobotResults.length;i++){
//     first=first+firstRobotResults[i]
//   }
// 
//   for (let b=0;b<secondRobotResults.length;b++){
//     second=second+secondRobotResults[b]
//   }
// 
//   if(first>second){
//     return"First robot for sale!"
//   }
// 
//   else if(second>first) {
//     return "Second robot for sale!"
//   }
// 
//   else if(second===first){
//     return"Both robots for sale!"
//   }
//   
// }
//
//console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]))// === 'First robot for sale!' // 29 > 23
//console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12]))// === 'Both robots for sale!' // 25 = 25
//console.log(compareRobots([1, 3, 4], [1, 1, 4, 5]))// === 'Second robot for sale!' // 8 < 11
//function checkNumber(number) {
//  return[(number>0),(number%2===0),(number%10===0)]
//  }
//  
//
//console.log(checkNumber(3) )//== [true, false, false]
//console.log(checkNumber(10))//=== [true, true, true]
//console.log(checkNumber(0) )//== [false, true, true]
//console.log(checkNumber(-1))//=== [false, false, false]

//unction getArraysSum(arr1, arr2) {
//let sum =0;
//
// for(let i=0;i<arr1.length;i++){
//   sum+=(arr1[i]+arr2[i])
// }
//return sum
// }
// 
//console.log(getArraysSum([1, 2], [3, 4]))// === 10  // 1 + 2 + 3 + 4 = 10
//console.log(getArraysSum([], []))// === 0

// function combineArrays(first, second) {
//  let sum =[];
//for(let i=0;i<first.length;i++){
//sum.push(first[i]+second[i])
//}
//return sum
//}
//
//console.log(combineArrays([1, 2, 5], [3, 6, 1]))// === [4, 8, 6]
//console.log(combineArrays([1], [6]))// === [7]
//console.log(combineArrays([], []))// === []

//function splitString(str) {
//  let result=[];
//  let newStr=str
//
//
//  if (str.length%2 !==0){
//    newStr+="_";
//  }
//
//  let split=newStr.split("")
//
//  for(let i=0;i<split.length;i+=2){
//    result.push(split[i]+split[i+1])
//  }
//  return result
//}
//
//console.log(splitString('abc'))// === ['ab', 'c_']
//console.log(splitString('abcdef'))//=== ['ab', 'cd', 'ef']

//function scrollingText(word) {
//  let result=[];
//  let upperWords=word.toUpperCase();
//
//  for(let i=0;i<upperWords.length;i++){
//result.push(upperWords.slice(i)+upperWords.slice(0,i))
//  }
//  return result
//}

//function isSpecialNumber(n) {
//  let number=n.toString();
//  //const specialNumber= "0,1,2,3,4,5";
//  for(let i=0;i<=number.length;i++){
//    
//    if(number[i]>5){
//      return 'NOT!!'
//    }
//  }
//   
//return "Special!!"
//}
//
//console.log(isSpecialNumber(2) )//=== 'Special!!'
//console.log(isSpecialNumber(9) )//=== 'NOT!!'
//console.log(isSpecialNumber(23))// === 'Special!!'
//console.log(isSpecialNumber(39))// === 'NOT!!'

//function isTidy(number) {
//  let str = number.toString();
//   for(let i=1;i<str.length;i++){
//     if(str[i]<str[i-1]){
//       return false;
//     }
//   }
//   return true;
//}
//
//console.log(isTidy (12))// ==> true
//console.log(isTidy (32))// ==> false
//console.log(isTidy (1024))// ==> false
//console.log(isTidy(3445))// ==> true
//console.log(isTidy (13579))// ==> true


function isJumping(number) {
  let str=number.toString();
  if(str.length===1) {return ' JUMPING'}
  
   for(let i=1;i<str.length;i++){
     if(Math.abs(str[i]-str[i-1]) !==1){
       return "NOT JUMPING"
     }
   }
   return ' JUMPING'
}

console.log(isJumping(9))// === 'JUMPING'
console.log(isJumping(79))// === 'NOT JUMPING'
console.log(isJumping(23454))// === 'JUMPING'
