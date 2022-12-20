alert("Hello!");

const testurl = "https://api.quotable.io/quotes?page=7";

fetch(testurl)
.then(res => res.json())
.then(data => console.log(data))

document.getElementById("quote").addEventListener("click", getQuote);

const quotes = document.getElementById("quotebox");

function getQuote() {
    const page = Math.floor(Math.random()* 100);
    const endpoint = `https://api.quotable.io/quotes?page=${page}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {console.log(data.results[0].content + " - " + data.results[0].author)
    //create a var to quickly access data
    let random = `<p>${data.results[0].content} - ${data.results[0].author}</p>`;
    quotes.innerHTML = random;
})
    
    //display results in quote-box, quotebox is connected because the lines below work
    //let random = `<h1>"To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly. - Henri Bergson"</h1>`;
    //quotes.innerHTML = random;
    
    

}


