// Configurar ubicacion del mapa
var map = L.map('map').setView([-34.4935435,-58.7040647], 13);

//Agregar una vista al mapa
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

//Agregar marcadores
var marker1 = L.marker([-34.4935435,-58.7040647]).addTo(map); 
var marker2 = L.marker([-34.4933306,-58.6768258]).addTo(map); 
var marker3 = L.marker([-34.5119929,-58.7039885]).addTo(map); 
var marker4 = L.marker([-34.489012, -58.730218]).addTo(map); 
var marker5 = L.marker([-34.4840046,-58.6873152]).addTo(map); 

marker5.bindPopup("<b>Vivian's Atropa Belladonna</b><br>Morse 120, Pablo Nogues").closePopup();
marker4.bindPopup("<b>Vivian's Datura Ferox</b><br>Batalla de Chacabuco, Grand Bourg").closePopup();
marker3.bindPopup("<b>Vivian's Aconitum Napellus</b><br>Cesar Bacle 3010, Los Polvorines").closePopup();
marker2.bindPopup("<b>Vivan's Dracunculus Vulgaris</b><br>Luis Espinosa 2651, Villa de Mayo").closePopup();
marker1.bindPopup("<b>Vivan's Digitalis Purpurea</b><br>Av. del Sesquicentenario 2126, Los Polvorines").closePopup();