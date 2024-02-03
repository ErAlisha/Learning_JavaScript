// function x(){
//       var a=7;
//       function y(){
//             console.log(a);
//       }
//       y();
// }

// x();
//y is a closure,which can acess lexical environment of x also

function x(){
      var a=7;
      function y(){
            console.log(a);
      }
      console.log(a);
      return y;          // when a function is returned to a function
}
var z=x();
console.log(z);
z();