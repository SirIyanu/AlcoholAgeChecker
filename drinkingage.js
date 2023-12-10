// A function that returns the right age for drinking
function drinkingage(age){
const officialage = 18;


if (age < officialage){
 return   "you are under age";
}else if (age >= officialage){
  return  "you are the correct age";
}
return age
}

console.log(drinkingage(2))