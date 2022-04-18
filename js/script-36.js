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

function even_or_odd(number) {
  
  if (number%2==0){
   return "Even"
    }
  else {return"odd"}
  
}

console.log(even_or_odd(2) );
console.log(even_or_odd(7) );

const dessert={type:"pie"}
dessert.type="pudding";

const seconds=dessert;
seconds.type="fruit"
console.log(dessert.type)