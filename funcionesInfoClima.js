var url = "https://weatherservices.herokuapp.com/api";
var urlClimaSanMiguel = "/weather/";
var urlPronosticoSanMiguel = "/forecast/";

/*
<div id="fecha-clima"></div>
<div id="imagen-clima"></div>
<div id="grados-clima"></div>
<div id="descripcion-clima-maniana"></div>
<div id="descripcion-clima-tarde"></div>

*/

function main(){
    climaActual();
}

function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}

function climaActual() {
    fetch(url + urlClimaSanMiguel)
    .then(response => response.json()) 
    .then(response => response['items']['0']['forecast']['forecast'])
    .then(response => {
        for(var i=0; i<Object.keys(response).length; i++){
        //mostrarClimaDeUnDia(response, "clima-dia",1);
        mostrarImagen(response, "imagen-clima"+i, i);
        mostrarFecha(response, "fecha-clima" + i,i);
        mostrarTempMax(response, "grados-clima" + i,i);
        mostrarTempMin(response, "grados-clima" +i ,i);
        mostrarDescManiana(response,"descripcion-clima-maniana" + i,i);
        mostrarDescTarde(response,"descripcion-clima-tarde" +i,i);
        }
        //mostrarClimaDeTodosLosDias(response,"lista-fecha");
    })
    .then(response => console.log(response));
}

/*
function mostrarClimaDeUnDia(response , elementoId, idDia){
    let lista = document.getElementById(elementoId);  
        //console.log(key, response[key].date);
        let item = document.createElement("li");
        item.append(response[idDia].date + "\n");
        item.append(response[idDia].temp_max + "\n");
        item.append(response[idDia].temp_min + "\n");
        item.append(response[idDia].morning.description + "\n");
        mostrarImagen(response[idDia].morning.weather_id, elementoId);
        lista.append(item);       
}

function mostrarClimaDeTodosLosDias(response , elementoId){
    let lista = document.getElementById(elementoId);
    Object.keys(response).forEach(key => {   
        console.log(key, response[key]);
        let item = document.createElement("p");
        item.append("Fecha: " + response[key].date);
        item.appendChild(document.createElement("br"));
        item.append("Temperatura máxima: " + response[key].temp_max);
        item.appendChild(document.createElement("br"));
        item.append("Temperatura mínima: " + response[key].temp_min);
        item.appendChild(document.createElement("br"));
        item.append("Descripción: " + response[key].morning.description);
        item.appendChild(document.createElement("br"));
        mostrarImagen(response[key].morning.weather_id, elementoId);
        lista.append(item);       
    });
}*/

function mostrarFecha(response , elementoId, idDia){
    let lista = document.getElementById(elementoId);
        //console.log(key, response[key].date);
        let item = document.createElement("p");
        item.append(response[idDia].date);
        lista.append(item);       
}

function mostrarTempMax(response , elementoId, idDia){
        let lista = document.getElementById(elementoId);
            //console.log(key, response[key].date);
            let item = document.createElement("p");
            item.append("Max " + response[idDia].temp_max + " °C");
            lista.append(item);       

}

function mostrarTempMin(response , elementoId, idDia){
    let lista = document.getElementById(elementoId);
        //console.log(key, response[key].date);
        let item = document.createElement("p");
        item.append("Min " + response[idDia].temp_min + " °C");
        lista.append(item);       
}

function mostrarDescManiana(response , elementoId, idDia){
    let lista = document.getElementById(elementoId);
        //console.log(key, response[key].date);
        let item = document.createElement("p");
        item.append(response[idDia].morning.description);
        lista.append(item);  
}

function mostrarDescTarde(response , elementoId, idDia){
    let lista = document.getElementById(elementoId);
        //console.log(key, response[key].date);
        let item = document.createElement("p");
        item.append(response[idDia].afternoon.description);
        lista.append(item);       
}

function mostrarImagen(response , elementoId, idDia){
    let lista = document.getElementById(elementoId);
        //console.log(key, response[key].date);
        let item = document.createElement("br");
        item.append(cargarImagen(response[idDia].morning.weather_id, elementoId));
        lista.append(item);       
}

function cargarImagen(numero , elementoId){
    let images = document.getElementById(elementoId);
    let newimg = document.createElement("img");

    if (numero == 4 || numero == 11){
    newimg.setAttribute("src", "imagenes/lluvias.png");
    newimg.setAttribute("width","50");
    newimg.setAttribute("height","50");
    images.appendChild(newimg);
    }
    if (numero == 18){
        newimg.setAttribute("src", "imagenes/nublado.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
    if (numero == 2 || numero == 1){
        newimg.setAttribute("src", "imagenes/parcialmentenublado.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
}


