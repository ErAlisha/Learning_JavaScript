//npm install readline-sync ,, //This code needs to be run in terminal to find the readline-sync

function isValidFormat(dob){
      var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;  //this is regular expression to match the input format of our string with it
      return dateRegex.test(dob); // will return true if dob matches with the input format of the mentioned regular expression else false
}

function isLeapYear(year){
      if((year%4==0 && year % 100 !== 0) || (year % 400 == 0)){
            return true;
      }
      else
            return false;
}

function checkLeapYear(dob){
  if(! isValidFormat(dob)){
      console.log(chalk.red("Your Format is Invalid. Please enter the date of birth in this format - (DD/MM/YYYY)  "));
      return;
  }

  //else format will be valid
  var year = dob.substring(6,10);
  if(! isLeapYear(year)){
      console.log(chalk.red("YOU WERE NOT BORN IN A LEAP YEAR !"));
  }
  else{
      //true aaya hoga
      console.log(chalk.red("YOU WERE BORN IN A LEAP YEAR"));
  }
}

var readLineSync = require('readline-sync');
var chalk = require('chalk');
  var userName = readLineSync.question(chalk.green("What's your good name ?",'\n')); //user input
  console.log(chalk.magenta("Hey!!",userName,"! WELCOME! to an interesting game!, Let's figure out something interesting!",'\n'));
  var dob = readLineSync.question(chalk.green("Can you please enter your Date of Birth?",'\n'));
  console.log(chalk.blue("---RESULTS BELOW---"));
  checkLeapYear(dob);