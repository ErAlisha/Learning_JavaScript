// console.log(x);
// print();
// console.log(print);

// var x = 10;
// function print(){
//       console.log("I am Software Engineer");
// }
//console.log(x);

//SHADOWING
// let b=100;
// {
//      var a=10;
//      let b=20;
//      const c=30;
//      console.log(a);
//      console.log(b); //Shadowing of b 
//      console.log(c);
// }
// console.log(b);

// SHADOWING IN FUNCTIONS - ex-1
// var a=10;
// function learn(){
//       var a = 30;
//       console.log(a);
// }
// console.log(a);
// learn();        
// console.log(a);   //here it might seem that var is behaving like block scope but it is not so,it's taking value of a from global execution context

//ex-2
// const a=10;
// function x(){
//       const a=0;
//       console.log(a);
// }
// console.log(a);
// x();
// console.log(a);


// ILLEGAL SHADOWING
// let a=2;
// {
//       var a=3;
//       console.log(a);
// }
// console.log(a);
//will not run as we can't shadow a let using a var

//LEXICAL BLOCK SCOPE
// const a =10;
// {
//       const a=20;
//       {
//             const a=30;
//             console.log(a);
//       }
//       console.log(a);
// }
// console.log(a);