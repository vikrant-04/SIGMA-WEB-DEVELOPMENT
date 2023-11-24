console.log("hello");
var global_varibale=34;
var a=4;
a=a+1;
//let 3c=4; not allowed as the variables names can only start with _,$,and letters 
{ 
    var a=5;
    console.log(a);
}
console.log(global_varibale);
console.log(a);

let o={
    name:"vikrant",
    "roll no":34,
}

console.log(o);
o.age = 34;
console.log(o);

let a1="harry";
let a2=34;
let a3=true;
let a4=34.3;
let a5=undefined;
let a6=null;
let a7='a';
console.log(a1,a2,a3,a4,a5,a6,a7);
console.log(typeof a1,typeof a2,typeof a3,typeof a4,typeof a5,typeof a6,typeof a7);