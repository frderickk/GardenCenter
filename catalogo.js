

var plantas = '[{"nombre":"rosa china","precio":"100","imagen":"./imagenes/rosa_china.jpg"},{"nombre":"alegrias","precio":"100","imagen":"./imagenes/alegrias.jpg"},{"nombre":"jazmin","precio":"100","imagen":"./imagenes/jazmin.jpg"}]';

var plantasJSON = JSON.parse(plantas);

var main = document.getElementById("catalogoMain");



plantasJSON.forEach(planta => {
  var divPlanta = document.createElement("div");
  
  var nombrePlanta = document.createElement("p");
  var imgPlanta = document.createElement("img");
  imgPlanta.src = planta.imagen;
  nombrePlanta.textContent = planta.nombre;

  divPlanta.appendChild(imgPlanta);
  divPlanta.appendChild(nombrePlanta);

  main.appendChild(divPlanta);
});




