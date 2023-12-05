var n=6;
var arr= new Array(6);
//using array and reduce
for (let index = 0; index < arr.length; index++) {
    arr[index]=index+1;
}
console.log(`the factorial of ${n} is `+arr.reduce((a,b)=>a*b));  //this will return the factorial of n 

//using for loop 
var fact=1;
for(var i=1;i<=n;i++){
    fact*=i;
}
console.log(`the factorial of ${n} is ${fact}`);

