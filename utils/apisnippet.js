const fetch = require('node-fetch')

var quot = () => {
fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "caab3f2bf7mshccd2c129354d4e6p1b017ejsn671f0b885774",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(quote => {
	const frase = quote.content
	const author = quote.originator.name
	console.log(frase, author)
})
.catch(err => console.error(err));
}
