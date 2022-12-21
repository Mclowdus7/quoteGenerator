alert("Hello!");

const testurl = "https://api.quotable.io/quotes?page=7";

fetch(testurl)
.then(res => res.json())
.then(data => console.log(data))

document.getElementById("quote").addEventListener("click", getQuote);
document.getElementById("motivation").addEventListener("click", getMotivation);
document.getElementById("love").addEventListener("click", getLove);
document.getElementById("wisdom").addEventListener("click", getWisdom);


const quotes = document.getElementById("quotebox");

function getQuote() {
    const page = Math.floor(Math.random()* 100);
    const endpoint = `https://api.quotable.io/quotes?page=${page}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {console.log(data.results[0].content + " - " + data.results[0].author)
    let random = `<p>${data.results[0].content} - ${data.results[0].author}</p>`;
    quotes.innerHTML = random;
  })
}



function getWisdom() {
    const endpoint = `https://api.quotable.io/random?tags=wisdom`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {console.log(data.content + " - " + data.author)
    let random = `<p>${data.content} - ${data.author}</p>`;
    quotes.innerHTML = random;
   })
}

function getMotivation() {
    const endpoint = `https://api.quotable.io/random?tags=motivational`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {console.log(data.content + " - " + data.author)
    let random = `<p>${data.content} - ${data.author}</p>`;
    quotes.innerHTML = random;
   })
}

function getLove() {
    const endpoint = `https://api.quotable.io/random?tags=love`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {console.log(data.content + " - " + data.author)
    let random = `<p>${data.content} - ${data.author}</p>`;
    quotes.innerHTML = random;
   })
}
    
    
    
    




