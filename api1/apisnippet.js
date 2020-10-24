var unirest = require("unirest");
let quote = {};
var req = unirest("GET", "https://quotes15.p.rapidapi.com/quotes/random/");

req.query({
    "language_code": "en",
});

req.headers({
	"x-rapidapi-host": "quotes15.p.rapidapi.com",
	"x-rapidapi-key": "caab3f2bf7mshccd2c129354d4e6p1b017ejsn671f0b885774",
	"useQueryString": true
});


req.end( (res) => {
	if (res.error) throw new Error(res.error);
    quote = () =>{
        return `${res.body.content}
${res.body.originator.name}`;
    };
    console.log(quote())
});

module.exports = quote;
