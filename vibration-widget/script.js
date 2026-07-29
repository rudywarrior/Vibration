const API_URL =
"https://vibration-api.rudywarrior-oct24.workers.dev";


fetch(API_URL)

.then(response => response.json())

.then(data => {


document.getElementById("title").textContent =
data.title;


document.getElementById("author").textContent =
"— " + data.author;


document.getElementById("source").textContent =
data.source;


})

.catch(error => {


document.getElementById("title").textContent =
"Vibration Error";


console.error(error);


});
