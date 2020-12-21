(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
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
},{"node-fetch":1}]},{},[2]);
