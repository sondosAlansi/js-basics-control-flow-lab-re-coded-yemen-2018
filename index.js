// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let result;
  if  (feet <= 400){
   result='This one is on me!';
  }
   else if  (feet > 2000 && feet < 2500){
   result='I will gladly take your thirty bucks.';
  }
   else if  (feet > 2500){
   result='No can do.';
  }
  
  return result;
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
 let check;
  city=="NYC"?check='Ok, sounds good.':check='No go.';
  return check;
}
console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(Tip){
  Tip="generous";
  let Themessage;
  switch(Tip){
    case 'generous':
      Themessage="Thank you so much.";
      break;
     
      default:
      Themessage='Bye.';
     break;
      
  }
  return Themessage;
  
}
console.log (switchOnCharmFromTip('generous'));
console.log (switchOnCharmFromTip('not as generous'));
console.log (switchOnCharmFromTip('thanks for everything'));
