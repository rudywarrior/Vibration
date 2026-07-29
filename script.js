const API_URL =
"https://vibration-api.rudywarrior-oct24.workers.dev";


async function loadVibes(){


try{


const response =
await fetch(API_URL);



const data =
await response.json();




document.getElementById("text").textContent =
data.title || "";



document.getElementById("author").textContent =
data.author
?
"— " + data.author
:
"";



document.getElementById("source").textContent =
data.source || "";




if(data.related){


document.getElementById("related").textContent =
"📚 Related Cabinet";


}




if(data.media){


const image =
document.getElementById("media");


image.src=data.media;


image.style.display="block";


}



}catch(error){


console.error(error);


document.getElementById("text").textContent =
"Error";


}


}



loadVibes();
