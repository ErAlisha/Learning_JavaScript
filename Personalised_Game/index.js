//let age = prompt("What's your age?"); (Not working in replit)

var score=0;
var questionCount=0;
var readLineSync = require('readline-sync')
var userName = readLineSync.question("What's your name? ");
questionCount++;
if(userName==="Alisha"){
  console.log("Yes ! you are right");
  console.log("Welcome"+" "+userName);
  score++;
}
else{
  console.log("You are Wrong!")
}
console.log('\n')


let age=readLineSync.question("What's your age?")
questionCount++;
if(age>25){
  console.log("You are Wrong !")
}
else{
  console.log("You are right !"+" "+userName);
  score=score+1;
}
console.log('\n')


let hometown=readLineSync.question("What's your hometown?")
questionCount++;
if(hometown=='Jalalabad'){
  score++;
  console.log("You are exactly right"+" "+userName)
}
else{
  console.log("You are wrong !")
}
console.log('\n')


console.log("Your score is "+score+" from total "+questionCount +" "+"questions");
console.log("Thanku for playing !")