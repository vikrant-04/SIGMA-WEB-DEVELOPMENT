let a= document.querySelector(".container");
console.log(a);
function createCard(title,cname,views,monthsOld,duration,thumbnail) {
    
    //main div
    var div= document.createElement("div");
    div.className="cards";
    div.style.display="flex";
    div.style.backgroundColor="rgb(0,0,0)"
    div.style.color="white"
    div.style.padding="10px"

    //imge conatiner div
    var imageContainer=document.createElement("div")
    imageContainer.style.position="relative";

    //image 
    var image = document.createElement("img");
    image.src=thumbnail;
    image.alt="thumbnail";
    image.width=300;
    image.style.borderRadius="10px"
    var textarea = document.createElement("div");
    textarea.style.display="flex";
    textarea.style.flexDirection="column";
    textarea.style.marginLeft="10px"

    //duration
    var dur=document.createElement("span")
    dur.innerText=duration;
    dur.style.position="absolute"
    dur.style.right="0"
    dur.style.bottom="0";
    dur.style.margin="10px";
    dur.style.padding="3px";
    dur.style.borderRadius="5px"
    // dur.style.backgroundColor="rgb(0,0,0,.6)";

    imageContainer.append(image);
    imageContainer.append(dur)
    div.append(imageContainer);

    //title
    var para= document.createElement("p")
    para.innerText=title;
    para.style.fontSize="larger";
    para.style.fontWeight="bold"
    textarea.append(para);

    //text area 2
    var text2=document.createElement("div");
    text2.style.display="flex";
    var channel = document.createElement("span");
    channel.innerText=cname;
    //views converter function call
    views=views_converter(views);
    var views_count = document.createElement("span");
    views_count.innerText=views;
    var monthsold =document.createElement("span");
    monthsold.innerText=monthsOld+"months ago";
    //text area2 styling
    text2.append(channel,views,monthsold)
    text2.style.gap="5px"
    text2.style.color="rgb(255,255,255,.6)";
    textarea.append(text2);

    div.append(textarea);
    a.append(div);
    
}
function views_converter(views) {
    // if(views>=1000) 
    //     return `${views/1000}K`
    var dig_count=0;


    
    var temp=views;
    while(temp>0){
        dig_count++;
        temp=Math.floor(temp/10);
    }
    if(dig_count>9){
        var sub=views+"";
        return `${sub.substring(0,sub.length-9)}B`
    }
    else if(dig_count>6){
        var sub=views+"";
        return `${sub.substring(0,sub.length-6)}M`
    }
    else if(dig_count>3){
        var sub=views+"";
        return `${sub.substring(0,sub.length-3)}K`;
    }
    else return `${views}`
}

createCard("Introducion to new difficulty level","codeWithHarry",560000,7,"31:22","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCA3_MiIeOkWOlW_VvWSqOu4QXog")

createCard("Primitives and Objects in Java | JavaScript Tutorial in Hindi #4","codeWithHarry",724000,12,"11:32","https://i.ytimg.com/vi/qpU3WIqRz9I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiW4lLnXtjE1naNob7JYrH1MAmQQ")

createCard("Creating Myntra Clone using HTML, CSS & JavaScript","harryBhai",527000,24,"1:15:49","https://i.ytimg.com/vi/xhWHf-bMElk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWk6faU80aPKpGTajXPvlxcZYKSQ")

createCard("javascript nuggets","coding addict",17000,24,"8:53","https://i.ytimg.com/vi/5BFkp8JjLEY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8ixlxNnV3mmxLY7KpMXcI6JUZGw")