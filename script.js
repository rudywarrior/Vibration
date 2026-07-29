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


if(data.related){

document.getElementById("related").textContent =
"📚 " + data.related;

}



if(data.media){


const img =
document.getElementById("media");


img.src=data.media;


img.style.display="block";


}



}catch(error){


console.error(error);


document.getElementById("text").textContent =
"読み込みエラー";


}


}


loadVibes();
