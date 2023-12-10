function random(){
    var a = Math.floor(Math.random()*256);
    return a;
}

let a =document.getElementsByClassName("box")

for(var i=0;i<5;i++){
    a[i].style.backgroundColor=`rgb(${random()},${random()},${random()})`;
    a[i].style.color=`rgb(${random()},${random()},${random()})`;
}