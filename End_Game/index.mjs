//npm install readline-sync
//npm install chalk
//var chalk = require('chalk');
//var readLineSync = require('readline-sync')

//Reason of using import instead of require
//chalk library is using ES Modules (ESM) syntax, while your JavaScript file is using CommonJS syntax. Node.js currently doesn't support mixing ESM and CommonJS modules using the require function. To address this, you can use a dynamic import with import() instead of require for ESM modules.

import chalk from 'chalk';
import readLineSync from 'readline-sync'

var userName = readLineSync.question("What is your good name ?");
console.log(chalk.green.bold.underline("Welcome "+chalk.magenta(userName)+" to a -> DO YOU KNOW ME quiz"));
console.log('\n');
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
  question: "What do I do in my free time ?",
  answer:"sing"
}

var questionTen={
  question:"What is my vision in life?",
  answer: "Software_Engineer"
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function play(question,answer){
  var userAns = readLineSync.question(chalk.cyan(question));
  if(userAns.toUpperCase() === (answer.toString()).toUpperCase()){
    console.log(chalk.green("You are right !"));
    score=score+1;
  }
  else{
    console.log(chalk.red("Oops ! You gave wrong answer !"));
  }
  console.log("Your current score is :",score);
  console.log("---------------");
}

for(let i=0;i<questions.length;i++){
  var curObj = questions[i];
  play(curObj.question,curObj.answer);
}
console.log("Your final score is :",score);
console.log("---------------------");

//check for high score
//scores of prior users

var user1Score={
  name : "Rajni",
  score: 7
}
var user2Score={
name : "Gori",
score: 6
}

var user3Score = {
  name : "Ansh",
  score : 5
}

var scores = [user1Score,user2Score,user3Score];

function highScore(currentUserName,currentScore){
   for(let i=0;i<scores.length;i++){
    if(currentScore>scores[i].score){
      console.log(chalk.magentaBright.bold("Yeah !! Great Job, You have made a new high score !!"));
      console.log(chalk.magentaBright.bold("Kindly send me a screenshot of your score so that I may update the high score !"));
      break; //basically ek se bhi high score beat hua to we'll come out from the loop
    }
   }
}

//function call to check if new high score is made or not
highScore(userName,score);


//To play this colourful game, you have to run 
//node index.mjs in your command prompt or in your terminal