//npm i readline-sync
//npm install readline-sync
var readLineSync = require('readline-sync')
var userName = readLineSync.question("What is your good name ?");
console.log("Welcome "+userName+" to a quick DO YOU KNOW ME quiz");
var score=0;


var questionOne ={
  question : "What is my age?",
  answer : 21
}

var questionTwo ={
  question : "Where do I live?",
  answer : "CU"
}

var questionThree ={
  question : "What is my ultimate hobby ?" ,
  answer : "Reading"
}

var questionFour={
  question : "What is my favorite food?",
  answer : "Paneer"
}

var questionFive={
  question : "What is my favorite color?",
  answer : "Black"
}

var questionSix={
  question : "How do I get ultimate peace in life?",
  answer : "Prayer"
}

var questionSeven={
  question : "What is my favorite sport?",
  answer : "badminton"
}

var questionEight={
  question:"Which is my favourite place to visit ?",
  answer:"Beas"
}

var questionNine={
  question: "What to I do in my free time ?",
  answer:"sing"
}

var questionTen={
  question:"What is my vision in life?",
  answer: "Software_Engineer"
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];


function play(question,answer){
  var userAns = readLineSync.question(question);
  if(userAns === answer){
    console.log("You are right !");
    score=score+1;
  }
  else{
    console.log("Oops ! You gave wrong answer !");
  }
  console.log("Your current score is :",score);
  console.log("---------------");
}

for(let i=0;i<questions.length;i++){
  var curObj = questions[i];
  play(curObj.question,curObj.answer);
}
console.log("Your final score is :",score);