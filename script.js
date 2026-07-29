const API_URL =
"https://vibration-api.rudywarrior-oct24.workers.dev";


async function loadVibes(){

    try {

        const response = await fetch(API_URL);

        const text = await response.text();

        console.log(text);


        const data = JSON.parse(text);


        document.getElementById("title").textContent =
        data.title;


        document.getElementById("author").textContent =
        data.author
        ? "— " + data.author
        : "";


        document.getElementById("source").textContent =
        data.source || "";


    } catch(error){

        console.error(error);

        document.getElementById("title").textContent =
        error.message;

    }

}


loadVibes();
