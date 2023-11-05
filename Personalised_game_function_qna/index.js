//qna in functions
var readLineSync = require("readline-sync")
var score=0;

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer===answer){
    score++;
    console.log("You are Right !");
  }
  else{
    console.log("You are Wrong !");
    console.log("Better Luck next time !");
  }
}
play("What is your name? ","Alisha");
console.log('\n')
play("What's your dream? ","coding");
console.log('\n')
play("What's your age? ","21");
console.log('\n')
console.log("Till now, Your score is : "+score);
console.log('\n')
var more = readLineSync.question("Do you want to play more? ");

if(more=="yes"){
  play("What's your favourite subject? ","music");
  console.log('\n')
  play("What's your favourite color? ","black");
  console.log('\n')
  console.log("Your score is : "+score);
}
else{
  console.log("Thank you for playing !");
}
//please note it's case sensitive,so your answer's case should be exactly same as mentioned.