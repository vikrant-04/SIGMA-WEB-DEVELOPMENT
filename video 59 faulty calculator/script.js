console.log("faulty calculator")
let r=Math.random();
console.log(r);

let a=prompt("enter first num");
let o=prompt("enter the operator");
let b=prompt("enter the second num");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(r<0.1){
    console.log(`the answer is ${`${a}  ${o} ${b}`}`);
}
else{
    console.log(`the answer is ${`${a}  ${o} ${b}`}`);
}