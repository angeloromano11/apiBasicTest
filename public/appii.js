const fetch = require('node-fetch')

var boton = document.getElementById('getQuote');
var text = document.getElementById('quote');
var authory = document.getElementById('author');
var spiner = document.getElementById('loader');




boton.onclick = () => {
    spiner.style.display = "block"; 
    text.innerText = null;
    authory.innerText = null;
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "caab3f2bf7mshccd2c129354d4e6p1b017ejsn671f0b885774",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(quote => {
        spiner.style.display = "none";  
        let frase = quote.content
        let author = quote.originator.name
        text.innerText = frase;
        authory.innerText = author;
        console.log(frase, author)
    })
    .catch(err => {console.error(err)
        alert('boom' + err)
    });  
};