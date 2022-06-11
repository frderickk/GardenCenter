var familiasPlantas = familias;


var familiasJSON = JSON.parse(familiasPlantas);

var main = document.getElementById("catalogoMain");





familiasJSON.forEach(planta => {

  var plantaContainer = document.createElement("details");
  var plantaHeader = document.createElement("summary");

  var nombreComun = document.createElement("h2");
  var detalles = document.createElement("ul");
  var nombreCientifico = document.createElement("li");
  var color = document.createElement("li");
  var fruto = document.createElement("li");
  var clase = document.createElement("li");
  var tipoSuelo = document.createElement("li");
  var cicloRiego = document.createElement("li");
  var TemperaturaAmbiente = document.createElement("li");
  var img = document.createElement("img");

  nombreComun.textContent = planta.nombreComun;
  nombreCientifico.textContent = "Nombre cientifico: " + planta.nombreCientifico;
  color.textContent = "Color: " + planta.color;
  fruto.textContent = "Fruto: " + planta.fruto;
  clase.textContent = "Clase: " + planta.clase;
  tipoSuelo.textContent = "Tipo de suelo: " + planta.tipoSuelo;
  cicloRiego.textContent = "Ciclo de riego: " + planta.cicloRiego;
  TemperaturaAmbiente.textContent = "Temperatura ambiente: " + planta.TemperaturaAmbiente;
  img.src = planta.imagen;

  detalles.appendChild(nombreCientifico);
  detalles.appendChild(color);
  detalles.appendChild(fruto);
  detalles.appendChild(clase);
  detalles.appendChild(tipoSuelo);
  detalles.appendChild(cicloRiego);
  detalles.appendChild(TemperaturaAmbiente);

  plantaHeader.appendChild(nombreComun);
  plantaHeader.appendChild(img);

  plantaContainer.appendChild(plantaHeader);
  plantaContainer.appendChild(detalles);

  //divPlanta.className="containerFamilia";

  main.appendChild(plantaContainer);



  var nombres = document.getElementById("fitroNombreComun");
  var liNombre = document.createElement('li');
  liNombre.textContent = planta.nombreComun;
  nombres.appendChild(liNombre);

  var nombresCientificos = document.getElementById("fitroNombreCientifico");
  var liNombreCientifico = document.createElement('li');
  liNombreCientifico.textContent = planta.nombreCientifico;
  nombresCientificos.appendChild(liNombreCientifico);

  var colores = document.getElementById("fitroColor");
  var liColor = document.createElement('li');
  colores.appendChild(liColor);
  liColor.textContent = planta.color;

  var frutos = document.getElementById("fitroFruto");
  var liFruto = document.createElement('li');
  frutos.appendChild(liFruto);
  liFruto.textContent = planta.fruto;

  var clases = document.getElementById("fitroClase");
  var liClase = document.createElement('li');
  clases.appendChild(liClase);
  liClase.textContent = planta.clase;
  

});





