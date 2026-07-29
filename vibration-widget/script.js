fetch(
"https://vibration-api.rudywarrior-oct24.workers.dev"
)

.then(
response=>response.json()
)

.then(
data=>{


document.getElementById("title")
.textContent=

"「"+data.title+"」";



document.getElementById("author")
.textContent=

"— "+data.author;


}

);
