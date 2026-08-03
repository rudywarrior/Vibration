<<<<<<< codex/fix-vibration-api-url-20260804
const API_URL = "https://vibration.rudywarrior-oct24.workers.dev/";

const text = document.getElementById("text");
const author = document.getElementById("author");
const related = document.getElementById("related");
const media = document.getElementById("media");

async function loadVibes() {
  try {
    const response = await fetch(API_URL, { headers: { Accept: "application/json" } });
    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.error) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }

    text.textContent = data.title || "ーーー";
    author.textContent = data.author ? "— " + data.author : "";

    if (data.related) {
      related.textContent = "🌐 " + data.related;
    } else {
      related.textContent = "";
    }

    if (data.media) {
      media.src = data.media;
      media.style.display = "block";
    } else {
      media.removeAttribute("src");
      media.style.display = "none";
    }
  } catch (error) {
    console.error("Vibration Error:", error);
    text.textContent = "Vibration Error";
    author.textContent = "データを読み込めませんでした";
    related.textContent = "";
    media.removeAttribute("src");
    media.style.display = "none";
  }
=======
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

>>>>>>> main
}

loadVibes();
