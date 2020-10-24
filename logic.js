const { reset } = require("nodemon");
const quote = require("./api1/apisnippet")
var demo = document.getElementById('demo')
const btn = document.getElementById('boton')


btn.addEventListener('click', reset )

reset = () => {
    demo.innerHTML = 'test';
  }