console.log("Code Your Dreams and turn them Reality")
//defining an object
var rectangle={
      //properties of object
   length:1,
   breadth:2,

   //behaviour to the object can be added by using functions,a function is made to perform a single well defined task,,basically agar koi function object ke andar create ho to it's called method,not as function
   draw(){
       console.log('Draw is the name of function')
   }
};
console.log(13 ,rectangle.draw()); //not able to access draw() 

//rectangle is an object.if we want multiple rectangles or say multiple objects of type rectangle,we need to make it a function,so that we can make many objects from that function
//As a noob we might be doing this
var rectangleObj={
      //properties of object
   length:1,
   breadth:2,

   //behaviour to the object can be added by using functions,a function is made to perform a single well defined task,,basically agar koi function object ke andar create ho to it's called method,not as function
   draw(){
       console.log('Draw is the name of function')
   }
};

//but inspite of defining the object again and again,we can simply define a function and so that it couls return the desired object to us.
//factory function
function createRectangle(){
      return rectangle={
            length:2,
            breadth:4,

            draw(){
                  console.log('Hi!I am responsible to provide behaviour to the function')
            }
      };
}
      //object creation from above function
      let rectangle1= createRectangle();
      console.log(42,rectangle1.draw());  //**** */

      //take dimensions from user,using parametric function

      function createTriangle(base,height){
            return triangle={
                  area(){
                        console.log("Area of right angled triangle = ",1/2*base*height);
                  }
            };
      }

      let triangle1=createTriangle(6,10);
      let triangle2=createTriangle(4,9);

      
     
