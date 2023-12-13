var button =document.querySelector(".btn");
button.addEventListener("click",()=>{
    document.querySelector(".container").innerHTML="you are a <b>cutie</b>";
})


document.addEventListener("keypress",e=>{
    console.log(e.key);
})

