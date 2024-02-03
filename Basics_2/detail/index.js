//we can create objects in two ways - 
//by using - 1.) literal   2.)Constructor
//when we create object using constructor, we get a singleton object.(The one which is just one,and no more copies of it are made)
//but via creating objects using the literals,we can make it's multiple instances.

//Using Constructor method(Singleton is formed)
// Object.create (to be discussed further)

//Using Object Literal
const JsUser={
      user_name: "Alisha",
      uid : "20bcs9340",
      user_status : "SDE"
}
console.log(JsUser.user_name);
