//In-built objects and arrays
//In-built 
//Math.round off
//Math.abs
//String - javascript mein string do types ki hoti hai,, primitive wali and object wali
//let name='Alisha' primitive wali
// to convert this primitive string to object,,we'll use dot notation with it,and js will then treat it as object
//name.length, name.includes('l')
// let name = new String('Alisha'); //object string
//escape sequences
//Template Literals --agar escape sequences use nhi krne to can use it using writing sentence in backticks,,ise fir jaise ide me likhenge vaise hi print hoga
// dynamically ${name} ,,placeholder
//object literal,string literal,template literal--use mdn
//date,,mdn for formats

//Learning arrays

let numbers= [1,2,3,4,5];
console.log(numbers);
console.log(numbers.length);
//insertion in an array

//At ending
numbers.push(6);

//At beggining
numbers.unshift(0);

//in middle
numbers.splice(2,0,7,8,9);
// index where to insert,number of deletions from that index,what to insert
console.log(numbers);

//Searching in our array
console.log(numbers.indexOf(7));
//check if a number if present or absent 
if(numbers.indexOf(10)!= -1){
      console.log("Present");
}
else{
      console.log("Absent");
}
//better method to do it
console.log(numbers.includes(4));
console.log(numbers.includes(5,2)); // search element,start searching from index
//Till now we worked on array of primitive data types like the numbers,now
//we'll make array of objects or say array of references
let courses = [
      {
            naam:'Alisha',
            no : 1
      },
      {
            naam:'Avishi',
            no:2
      },
      'best'
];
console.log(courses); 
//can't use indexOf and includes to search in array of references,, 
//to search in array of references we'll be using the callback functions.
//A callback function is a function passed into another function, as an arguement which is then invoked inside the outer function to complete some kind of action.
//find function

 let course= courses.find(function(course){
       return course.naam==='Alisha';
 })
// course function ka naam hai ho dhund rha hai Alisha ko and pura function hi hmne arguement mein de rakha hai
 console.log(course);
//arrow functions
//paramerer 1 ho then we can remove bracket,and 
let course2 = courses.find(course => course.naam ==='Alisha');
console.log(course2);
let course1 = courses.find(course => course.naam ==='Ansha');
console.log(course1);
//steps to make a callback funtion to an arrow function
//remove the word function,remove brackets,use arrow,remove return also

//REMOVING ELEMENT FROM THE ARRAY

// removing from the beginning = using the shift method
//ending = using pop method
//middle= using splice method 
let arr=[2,4,6,8,10];

arr.shift();
console.log(arr);
arr.pop();
console.log(arr);
arr.splice(1,2);
console.log(arr);

//EMPTYING AN ARRAY
let num1=[1,2,3,5,6];
let num2 = num1; //references copy hue,as it is array
num1=[];        //not right way to empty the array,as the array is made we are just trying to point our num1 to empty location,but values are still present in memory
console.log(num1); 
console.log(num2);
//better way to empty our array is
num1.length=0;
console.log(num1);
//can empty our array using splice also
console.log(num2);
num2.splice(0,num2.length);
console.log(num2);

//Combining and slicing the array
let num3=[10,20,30];
let num4 = [0,0,0];
//can combine using the concat 
let combined=num4.concat(num3);
console.log(combined);

//can slice using slice 
let sliced=combined.slice(1,3); //will give us slice of array elements of index 1,2 as 3 is not included
console.log(sliced);
//here if you don't save your slice,it doesn't work as it don't make any change to the original array

//Both the lines carry out the full slicing
//let fullSlicing=combined.slice(0,combined.length);
let fullSlicing = combined.slice(); 
console.log(fullSlicing);

//SPREAD OPERATOR       (another method to concatinate two arrays )
let first=[1,3,5,7,9];
let sec=[2,4,6,8,10];
let third=[...first,'a','true',...sec];
console.log(third);

//iterating on the array
for(let key of third){     //for of loop
      console.log(key);
}

//for each loop  (iterating on array)

