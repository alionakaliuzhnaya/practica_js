//function bmi(weight, height) {
//
//  let bmi = weight / (height ** 2)
//
//  let c = "Normal"
//
//  switch (bmi) {
//    case bmi <= 18.5:
//      c = "Underweight";
//      break;
//
//    case bmi <= 25.0:
//      c = "Normal";
//      break;
//
//    case bmi <= 30.0:
//      c = "Overweight";
//      break;
//
//  }
//return c
//}



  //function bmi(weight, height) {
  //  let bmi=weight / (height**2)
  //   if (bmi<=18.5){
  //     return "Underweight";}
  //     else if (bmi<=25.0){
  //       return "Normal"
  //   }
  //   else if(bmi<=30.0){
  //     return "Overweight"
  //   }
  //   else if (bmi>30){
  //     return "Obese"
  //   }
  // }

 // if (av<=18.5){
 //   return "Underweight"}
 //   else if  (av<=25.0){
 //     return "Normal"
 // }
 // else if  (av<=30.0){
 //   return "Overweight"
 // }
 // else if (av>30){
 //   return "Obese"
 // }}



//console.log(bmi(80, 1.80))

//function even_or_odd(number) {
//  
//  if (number%2==0){
//   return "Even"
//    }
//  else {return"odd"}
//  
//}
//
//console.log(even_or_odd(2) );
//console.log(even_or_odd(7) );
//
//const dessert={type:"pie"}
//dessert.type="pudding";
//
//const seconds=dessert;
//seconds.type="fruit"
//console.log(dessert.type)

//function DNAtoRNA(dna) {
//  // create a function which returns an RNA sequence from the given DNA sequence
//  return dna.replace(/T/g,"U")
//   
//}
//
//console.log(DNAtoRNA("GCAT"), "GCAU")

//const csLewisQuote = 'We are what we believe we are.';
//const regex = csLewisQuote.replace(/are/g,"hahaha")
//console.log(regex); // ["are", "are"]


//function setAlarm(employed, vacation){
//  if(employed ===vacation||vacation){
//    return false
//  }
//  else{ return true}
//  
//
//}
//
//function setAlarm(employed, vacation){
//  if(employed&&!vacation){
//    return true
//  }
//  else{ return false}
//  
//
//}
//
//
//console.log(setAlarm(true, true))// false
//console.log(setAlarm(false, true))// false
//console.log(setAlarm(false, false) )// false
//console.log(setAlarm(true, false))// true


//function sumArray(array) {
//  const min=Math.min(array)
//  const max =Math.max(array)
// 
//
// 
//}
//console.log(min)
//console.log(max)
//
//console.log(sumArray([ 3, 5 ]));
//console.log( sumArray([ 6, 2, 1, 8, 10 ]) );
//console.log( sumArray([ 0, 1, 6, 10, 10 ]) );
//console.log( sumArray([ -6, -20, -1, -10, -12 ]) );

//function sumArray(array) {
//  return array.length < 2 ? 0
//       : array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array);
//}
//console.log(
//  sumArray([6, 2, 1, 8, 10])
//)  

//function sumArray(array) {
//  if(array==null){
//     return 0;
//   }
//     else if(array.length < 2){
//       return 0;
//     }
// 
//      else {return array.reduce((a, b) => a + b) + Math.min(...array) + Math.max(...array);}
// }
// 
//console.log(
//  sumArray([6, 2, 1, 8, 10])
//)  


//nction sumArray(array) {
//if(array==null){
//  return 0;
//}
//  else if(array.length < 2){
//    return 0;
//  }
//   
//  else {
//    array=array.sort(function(a,b){
//      return a-b
//    })
//  let total =0;
//    for (let i=1;i<array.length-1;i++){
//      total+=array[i]
//    }
//    return total;
//  }
//}
//

//function isDivideBy(number, a, b) {
//  // good luck
//  if (number % a ===0 && number % b===0) 
//    {
//      return true;
//    }
//    
//
//  else{
//    return false
//  }
//}
//
//console.log(isDivideBy(-12, 2, -6) )
//console.log(isDivideBy(-12, 2, -5) ) 
//console.log(isDivideBy(45, 1, 6)   ) 
//console.log(isDivideBy(45, 5, 15)  )

//const areaOrPerimeter = function(l , w) { 
//  // Return your answer
//  if(l===w ) {
//    return l*w}
//    else{
//      return (l+w)*2
//    }
//};
//
//console.log(areaOrPerimeter(6,10))
//console.log(areaOrPerimeter(3,3))


//function makeNegative(num) {
  // Code?
  //return -Math.abs(num)
  //return num > 0 ? -num : num;
// if(num>0){
//   return -num
// }
// else{
//   return num
// }
//


//console.log(makeNegative(1));    // return -1
//console.log(makeNegative(-5));   // return -5
//console.log(makeNegative(0));    // return 0
//console.log(makeNegative(0.12)); // return -0.12
//
//
//let a = -Math.abs(7.25);
//let b = -Math.abs(0);
//
//console.log(a)
//console.log(b)

//function getSum( a,b )
//{
//  if(a===b){
//    return a
//  }
//  else if(a <b){
//    return a+getSum(a+1,b) 
//  }
//  else{
//    return  a + getSum(a-1,b);
//  }
//  
//}
//
//
//
//console.log(getSum(1, 0) )
//console.log(getSum(1, 2) )
//console.log(getSum(0, 1) )
//console.log(getSum(1, 1) )
//console.log(getSum(-1, 0)) 
//.log(getSum(-1, 2)) 

//function calculateTaxes(income) {
//  if (income<=1000){
//    return income*0.02
//  }
//  else if(income <=10000){
//    return income*0.03
//  }
//  else{return income*0.05}
//}
//
//console.log(calculateTaxes(900)) //18 // 900 * 0.02, оскільки 900 < 1000
//console.log(calculateTaxes(5000)) // 150 // 5000 * 0.03, оскільки 5000 < 10000
//console.log(calculateTaxes(10500)) // 525 // 10500 * 0.05, оскільки 10500 > 10000

//function getLargestExpressionResult(a,b){
//
//  let result =a+b;
//
//  if (a-b>result){
//    result=a-b
//  }
//  if(a*b>result){
//   result= a*b  }
//  if (a/b>result){
//result = a/b
//  }
//return result
//
//}
//
//
//console.log(getLargestExpressionResult(3, 4))

//function printNumbersBackwards(N) {
//  for (let i = 5; i > 1;  i--){
//    console.log(i)
//  }
  

//console.log(printNumbersBackwards(5))

//function getDrinks(numberOfGuests) {
//  let sum=0;
//  
//  for (let i=0;i<=numberOfGuests;i++){
//    sum+=i
//    //console.log(i)
//    
//  }
//  return sum
//  
//}
//
//
//console.log(getDrinks(3));
//console.log(getDrinks(0));
//console.log(getDrinks(15));

//function getDrinksWithStep(numberOfGuests, step) {
//  let sum=0;
//  for(let i=1;i<=numberOfGuests;i+=step){
//    sum+=i
//    //console.log(i)
//  }
//  return sum
//}
//
//console.log(getDrinksWithStep(10, 3)) //=== 22 // (1 + 4 + 7 + 10);
//console.log(getDrinksWithStep(0))// === 0 // нема гостей - нема випивки;
//console.log(getDrinksWithStep(5, 3)) //=== 5 // (1 + 4);
//console.log(getDrinksWithStep(18, 10))// === 12 // (1 + 11);


//function calculateProfit(amount, percent, period) {
//  let total=amount;
// 
//  for(let i=0;i<period;i++){
//    (total+total)*percent/100
//    total+=(total*percent)/100
//
//  }
//  return total-amount
//
//}
// 
//
//console.log(calculateProfit(1000, 5, 1))// === 50
//console.log(calculateProfit(12500, 3, 12)) // === 5322

//function countMs(text) {
//  let count =0;
//
//  for (const letter of text){
//    if(letter==="m"||letter==="M"){
//count ++
//    }
// 
//   }
//
//  
//  return count
// }
//
//console.log(countMs('document'))// === 1
//console.log(countMs('Mermaid'))// === 2 // потрібно рахувати і 'm', і 'M'
//console.log(countMs('code'))// === 0 


//function removeVowels(doc) {
//let result="";
// for (let d of doc){
//  // console.log(d)
//   if( !"aeiouy".includes(d.toLowerCase())){
//    result+=d
//   }
// }
//return result
//}
//
//console.log(removeVowels('document'))// === 'dcmnt'
//console.log(removeVowels('I like my boss'))// === ' lk m bss'
//console.log(removeVowels('350 euro'))// === '350 r'


//function makeAbbr(words) {
//  let abbreviation = words[0];
//
//  for (let i=0; i <= words.length;i++){
//    if(words[i] === " "){
//      abbreviation+=words [i+1];
//    }
//    
//  }
//  return abbreviation.toUpperCase()
//}
//
//console.log(makeAbbr('national aeronautics space administration'))// === 'NASA'
//console.log(makeAbbr('central processing unit'))// === 'CPU'
//console.log(makeAbbr('simplified molecular input line entry specification'))// === 'SMILES'

//function decryptMessage(message) {
//  let result="";
//  for (let i=message.length-1;i>=0; i--){
//    result+=message[i]
//  }
//  return result
//  }
//
//console.log(decryptMessage('!!!reeb gniknird ekil eW'))// === 'We like drinking beer!!!'
//console.log(decryptMessage('0202 ni eb lliw cimednap surivanoroc A'))// === 'A coronavirus pandemic will be in 2020'

//function isWerewolf(target) {
//  let direct="";
//  let reversed="";
// 
// for( let letter of target){
//
//   if(letter.toLowerCase()!==letter.toUpperCase()){
//     direct+=letter.toLowerCase();
//     reversed =letter.toLowerCase()+reversed
//   }
// }
// return direct===reversed
//}
//console.log(isWerewolf('rotator'))//=== true // rotator --> rotator
//console.log(isWerewolf('home'))// === false // home --> emoh
//console.log(isWerewolf('Racecar'))// === true // регістр ігнорується
//console.log(isWerewolf('eva, can i see bees in a cave'))// === true // пробіли і розділові знаки ігноруються


//function getSuccessRate(statistic) {
//
//  if(statistic.length===0){
//    return 0
//  }
//  let count=0;
//   for (let i=0; i<statistic.length;i++) {
//     if(statistic[i]==="1"){
//       count++;
//     }
//   }
// let result=(100/(statistic.length)*count)
// return Math.round(result)
//
//}
//console.log(getSuccessRate('11100'))// === 60
//console.log(getSuccessRate('1100'))// === 50
//console.log(getSuccessRate('000000'))// === 0
//console.log(getSuccessRate('11111'))// === 100
//console.log(getSuccessRate(''))// === 0

function createArray(N) {
  const numbers=[];
  if(N===0){
    return [];
  }

  for (let i=1;i<N,i++;){
    numbers.push(i)

  }
}
console.log(createArray(1))// === [1]
console.log(createArray(3))// === [1, 2, 3]
console.log(createArray(0))// === []