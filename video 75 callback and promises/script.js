var arr=["one","two","three","four"]

// arr.forEach(e=>{
//      console.log(e);
// })

// var my_forEach= (array,cb)=>{
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         cb(element);
//     }
// }


// my_forEach(arr,(e)=>{
//     console.log(e)
// })

var mycallBack = data=>{
    console.log("hello i am a call back funtio "+data);
}

function mainfun(e,cb){
    setTimeout(() => {
        var result=e*2;
        cb(result);
    }, 1000);
    console.log("hello");
}

mainfun(3,mycallBack)
