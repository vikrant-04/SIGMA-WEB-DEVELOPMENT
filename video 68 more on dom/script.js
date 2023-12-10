let a=document.getElementsByClassName("box")  //returns a html collection
a[0].style.backgroundColor="red";
let b= document.getElementById("box4")
b.style.backgroundColor="green"
// Array.from(a).forEach(e=>e.style.backgroundColor = "pink");

for (let index = 0; index < a.length; index++) {
    a[index].style.backgroundColor="grey"    
}
console.log(document.getElementsByTagName("div"))
console.log(a[0].matches("div"))
console.log(a[4].closest(".container"))
let c = document.querySelecto(.container)
console.log(c)