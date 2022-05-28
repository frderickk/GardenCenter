// Configurar ubicacion del mapa
var map = L.map('map').setView([-34.5442, -58.7404], 13);

//Agregar una vista al mapa
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Agregar marcadores
var marker1 = L.marker([-34.5500, -58.7000]).addTo(map); //En los corchetes van las coordenadas
var marker2 = L.marker([-34.5400, -58.7100]).addTo(map); //En los corchetes van las coordenadas
var marker3 = L.marker([-34.5300, -58.7200]).addTo(map); //En los corchetes van las coordenadas
var marker4 = L.marker([-34.5200, -58.7100]).addTo(map); //En los corchetes van las coordenadas
var marker5 = L.marker([-34.5100, -58.7404]).addTo(map); //En los corchetes van las coordenadas

marker1.bindPopup("<b>Tienda #1 </b><br>Dirección").openPopup();
marker2.bindPopup("<b>Tienda #2 </b><br>Dirección").openPopup();
marker3.bindPopup("<b>Tienda #3 </b><br>Dirección").openPopup();
marker4.bindPopup("<b>Tienda #4 </b><br>Dirección").openPopup();
marker5.bindPopup("<b>Tienda #5 </b><br>Dirección").openPopup();