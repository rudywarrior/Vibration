console.log("VIBES SCRIPT NEW");

const API_URL =
"https://vibration-api.rudywarrior-oct24.workers.dev";


async function loadVibes(){

    try {

        const response = await fetch(API_URL);

        console.log("status:", response.status);
        console.log("content-type:", response.headers.get("content-type"));


        const text = await response.text();

        console.log("response:", text);


        const data = JSON.parse(text);


        document.getElementById("title").textContent =
        data.title || "No Title";


        document.getElementById("author").textContent =
        data.author
        ? "— " + data.author
        : "";


        document.getElementById("source").textContent =
        data.source || "";


    } catch(error){

        console.error("ERROR:", error);

        document.getElementById("title").textContent =
        error.message;

    }

}


loadVibes();
