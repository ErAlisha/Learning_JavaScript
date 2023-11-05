//constructor function,, write in pascal notation(first letter of every word capital)
function TwoNum(n1,n2){
   this.num1 = n1,
   this.num2 = n2,
   this.add = function(){
      console.log("Adding both the numbers : ",n1+n2);
   }
}
//invoke an object from this
const Obj1 = new TwoNum(1,22);

//studying dynamic nature of objects -- Adding a new property
Obj1.type = "Whole numbers";
Obj1.operation="ADD";
//console.log(Obj1.add()); Till now,did'nt know how to access this add(n1,n2) function
console.log(Obj1);

//Deleting an existing property of an object
delete Obj1.operation;
console.log(Obj1);