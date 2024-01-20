//incase of primitives -- NN,SS,B,U
let a=10;
function increase(x){
      x++;
}
increase(a);
console.log(a);

//incase of reference type -- function,arrays,objects
let b = {
      value: 20
};

function inc(x){
      x.value++;
}
inc(b);
console.log(b);

//For-in loop
let rectangle = {
    length:5,
    breadth:10
};

for(let key in rectangle){
      console.log(key,rectangle[key]);
}

//For-of loop
console.log("Using for of loop");

for(let key of Object.keys(rectangle)){
      console.log(key);
}

for(let key of Object.entries(rectangle)){
      console.log(key);
}

//OBJECT CLONING
console.log("Object Cloning");
let src ={
      a:1,
      b:2,
      c:3
};

let dest={

};

for(let key in src){
      dest[key]=src[key];
}
src.a++;
console.log(src);
console.log(dest);
//we can see that first we made dest a clone of src then we incremented the value of a in src and it doesnt reflected in dest ,ie. clone was made successfully

//another way to clone using assign
let src1 ={
      x:2,
      y:3
};

let dest1 = Object.assign({},src1);
src1.x++;
console.log(src1);
console.log(dest1);
//Using assign function, we can copy multiple objects in our single desired object
dest1 = Object.assign({},src,src1);
console.log(dest1);

//cloning by spread
let src2 ={
      p:0,
      q:2
};
let dest2 = {...src2};
src2.p++;
console.log(src2);
console.log(dest2);