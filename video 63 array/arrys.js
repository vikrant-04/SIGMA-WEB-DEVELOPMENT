let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

console.log(arr[0]);
console.log(arr.length);
arr[0]=11;
console.log(arr);

console.log(typeof arr);

console.log(arr.toString())


console.log(arr.join("-"));
console.log(arr);
arr.pop();
console.log(arr);
arr.push(10)
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
delete arr[0];
console.log(arr);


let arr1=[10,9,7,6,5,4,3,2,1]

//arr1.sort();

console.log(arr1);
//console.log(arr1.toString());

arr1.splice(1,2,99,88)
console.log(arr1);
arr1.reverse();
console.log(arr1);

arr1.forEach((e,index,arr)=>{
    console.log(index,"hello",e);
})


var arr3=arr1.map(e=>{
    return e*e;
})

console.log(arr3)

var greater_than_5= e=>{ return e>5};
console.log(arr1.filter(greater_than_5));

var add_fun = (a,b)=>{
    return a+b;
}

console.log(arr1.reduce(add_fun));

console.log(Array.from("harry"));
