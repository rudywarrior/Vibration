const API_URL =
"https://vibration.rudywarrior-oct24.workers.dev";


async function loadVibes(){

try{

const response =
await fetch(API_URL);


const data =
await response.json();


// Text

document.getElementById("text").textContent =
data.title || "ーーー";


// Author

document.getElementById("author").textContent =
data.author
? "— " + data.author
: "";


// Related Cabinet

const related =
document.getElementById("related");


if(data.related && data.related !== "ーーー"){

related.textContent =
"🌐 " + data.related;

}else{

related.textContent =
"";

}


// File&Media

const media =
document.getElementById("media");


if(data.media){

media.src =
data.media;

media.style.display =
"block";

}else{

media.style.display =
"none";

}


}catch(error){

console.error(error);


document.getElementById("text").textContent =
"Vibration Error";

}

}


loadVibes();
