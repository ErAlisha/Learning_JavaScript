console.log('Namaste Duniya,Radha Soami Ji');
//learning primitive data types
// NN SS BB U
let a = 1;
let b=null;  //for null write it like this in small letters
let c= Symbol("I am a very good symbol"); //for symbol the s should be capital S
let d = "alisha";
let e = true;
let f=BigInt("567");
let g;
console.log(a,b,c,d,e,f,g);
console.log(typeof(f));
//object is a non primitive data type
const obj={
      "Alisha" : 20,
      "Happiness" : "neutral",
      "Life" : "Shukar",
      "improvement": true,
      1 : "Alisha"
}
console.log(obj["Alisha"]);
console.log(obj["improvement"]);
console.log(obj[1]); //so means key and value both can be of any data type













//its running good in console of web page
//its running good in command prompt
//its not working in terminal of vs code,,chal pada when instead of writing 
//node index.js     ,, I manually copied the complete path and run
//node C:\Users\HP\Desktop\Learning_JavaScript\Day_1\index.js
//as initially ye learning javascript tk to ja rha tha but not till day_1,,
//that's why it was not able to find out my index.js,
// so I manually told it the correct path and yes it's working now

//one more solution ,,
//cd Day_1 chala do,, yes!!
//as ye terminal hi to hai, and you'll end up saving yourself from again and again copy pasting the path to run it.
// in short learning ye hai,path thik kro and fir chalao, cd command use hojata hai cmd aur terminal dono mein