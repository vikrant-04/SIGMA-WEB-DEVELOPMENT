let a =document.querySelector(".box")
console.log(a.nodeName);
console.log(a.innerHTML);
console.log(a.outerHTML);
console.log(a.textContent);
//a.hidden=true   it will hide the element
console.log(a.hasAttribute("name"));
console.log(a.getAttribute("name"));
a.setAttribute("name","rohan")
a.removeAttribute("prop")
console.log(a.attributes);
console.log(a.dataset); //these are for attributes reserved for programmers starting with data-

//creating and inserting elements in the dom
let div=document.createElement("div")
div.className="inserted"
div.innerHTML="i am being inserted"
a.append(div)
a.insertAdjacentHTML("afterend","<p>hello</p>")
console.log(a.classList);
a.classList.remove("red")
a.classList.toggle("red")
