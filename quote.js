alert("Hello!");

const testurl = "https://api.quotable.io/quotes?page=7";

fetch(testurl)
.then(res => res.json())
.then(data => console.log(data))

document.getElementById("quote").addEventListener("click", getQuote);


function getQuote() {
    const page = Math.floor(Math.random()* 100);
    const endpoint = `https://api.quotable.io/quotes?page=${page}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => console.log(data.results[0].content + " - " + data.results[0].author))
    //display results in quote-box
    
    

}


