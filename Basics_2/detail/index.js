//we can create objects in two ways - 
//by using - 1.) literal   2.)Constructor
//when we create object using constructor, we get a singleton object.(The one which is just one,and no more copies of it are made)
//but via creating objects using the literals,we can make it's multiple instances.

//Using Constructor method(Singleton is formed)
// Object.create (to be discussed further)


const mySym = Symbol("key1"); //make a symbol and add it to your object
//Using Object Literal
const JsUser={
      user_name: "Alisha",
      uid : "20bcs9340",
      user_status : "SDE",
      "level" : "1",           //we can't access such value using dot,must know the square notation for this
      [mySym] : "Key1"
}
// console.log(JsUser.user_name);
// console.log(16);
// console.log(JsUser[user_name]); don't work as js takes user_name as string
// console.log(JsUser["user_name"]);
// console.log(JsUser.level);
// console.log(mySym);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]); //note here despite of being a symbol the type of our symbol mySym is string and not symbol when square braces are not used with our symbol
// console.log(JsUser);

//functions are also treated as variables
JsUser.greeting = function(){
      console.log("Hello! Js User !");
}
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
      console.log(`Hi! I am ${this.user_name}`); //string interpolation
}
// console.log(JsUser.greetingTwo());

const learner1= new Object(); //a singleton object
const learner2={}; //non-singleton object
learner2.name = "Alice";
learner2.id = "1";
learner2.address = "Punjab";
// console.log(learner2);
learner1.naam = "Gori";
// console.log(learner1);

//objects in objects
const regularUser={
      email: "some@gmail.com",
      fullName :{
            userFullName : {
                  firstName : "Er",
                  lastName : "Alisha"
            }
      }
}
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.name?.lastName); //this question mark after name says if name found then access its lastName else not,,this ? will save from throwing error

//merging two or more objects by using assign
const obj1 = {
      1 : "a",
      2 : "b",
}
const obj2 ={
      3:"c",
      4:"d"
}
const obj4={
      5:"e",
      6:"f"
}
const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

//more used syntax to combine two or more objects
//using spread operator
const obj5={...obj1,...obj2,...obj4};
// console.log(obj5);

//array of objects
const users = [
      {
            eid:'1',
            subject:"Cpp"
      },
      {
            eid : '2',
            subject:"Java"
      },
      {
            eid:'3',
            subject:"python"
      }
]
console.log(users[1].subject);
console.log(Object.keys(JsUser)); //array of keys
console.log(Object.values(JsUser));
//entries
console.log(Object.entries(JsUser)); //array of arrays with a key,value in an array
//to check if a particular property is present in our object or not, hasOwnProperty
console.log(JsUser.hasOwnProperty('uid'))
