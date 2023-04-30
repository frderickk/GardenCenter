var url = "https://weatherservices.herokuapp.com/api";
var urlClimaSanMiguel = "/weather/";
var urlPronosticoSanMiguel = "/forecast/";
var urlAlertas= "/alerts/byDay";
var urlAlertaNumero = "/0";

function main(){
    climaPronostico();
    climaDelDia();
    enviarFechas();
}

function climaPronostico() {
    fetch(url + urlClimaSanMiguel)
    .then(response => response.json()) 
    .then(response => response['items']['0']['forecast']['forecast'])
    .then(response => {
        for(var i=1; i<Object.keys(response).length; i++){
        mostrarRespuestaImagen(response[i].morning.weather_id, "imagen-clima"+i);
        mostrarRespuestaImagen(response[i].afternoon.weather_id, "imagen-clima-tarde"+i);
        mostrarRespuesta(response[i].date, "fecha-clima" + i);
        mostrarRespuesta("Temperatura máxima: " + response[i].temp_max, "grados-clima" + i);
        mostrarRespuesta("Temperatura mínima: " + response[i].temp_min, "grados-clima" + i );
        mostrarRespuesta("Durante el día: " + response[i].morning.description,"descripcion-clima-maniana" + i);
        mostrarRespuesta("Durante la noche: " + response[i].afternoon.description,"descripcion-clima-tarde" +i);
        }
    })
    .then(response => console.log(response));
}

function climaDelDia() {
    fetch(url + urlClimaSanMiguel)
    .then(response => response.json()) 
    .then(response => response['items']['0'])
    .then(response => {
        mostrarUbicacion(response,"ubicacion-clima0");
        agregarRespuesta("Temperatura: " + response['weather'].temp + "° C", "temp0");
        agregarRespuesta("Humedad: " + response['weather'].humidity + " %", "humedad0");
        agregarRespuesta("Presión: " + response['weather'].pressure + " hp", "presion0");
        agregarRespuesta("Viento: " + response['weather'].wing_deg, "dir-viento0");
        agregarRespuesta("Velocidad del viento: " + response['weather'].wind_speed + " km/s", "vel-viento0");
        agregarRespuesta("Visibilidad: " + response['weather'].visibility + " km", "visibilidad0");
        mostrarRespuestaImagen(response['weather'].id, "imagen-clima0");
        mostrarRespuesta(response['weather'].description, "descripcion-clima0");
    })
}

function enviarFechas() {
    var i = 0;
    fetch(url + urlAlertas + "/" + 0)
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
    agregarRespuesta(response[0].date, "alertas-dia" + 0);    
    })

    fetch(url +urlAlertas + "/" + 1 )
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
    agregarRespuesta(response[0].date, "alertas-dia" + 1); 
    })

    fetch(url +urlAlertas + "/" + 2 )
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
    agregarRespuesta(response[0].date, "alertas-dia" + 2); 
    })

    fetch(url +urlAlertas + "/" + 3 )
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
    agregarRespuesta(response[0].date, "alertas-dia" + 3); 
    })
}

function agregarRespuesta(response , elementoId){
    var newdoc = document.createElement('div');                 
    var t = document.createTextNode(response);       
    newdoc.appendChild(t);                                         
    document.getElementById(elementoId).appendChild(newdoc);
}


function mostrarRespuesta(response , elementoId){
    let lista = document.getElementById(elementoId);
        let item = document.createElement("p");
        item.append(response);
        lista.append(item);  
}

function enviarRespuesta(response , elementoId){
    var text = document.createTextNode(response);
    document.getElementById(elementoId).append(text);
}


function mostrarRespuestaImagen(response , elementoId){
    let lista = document.getElementById(elementoId);
        let item = document.createElement("br");
        item.append(cargarImagen(response, elementoId));
        lista.append(item);   
}



function mostrarUbicacion(response , elementoId ){
    let lista = document.getElementById(elementoId);
        let item = document.createElement("p");
        item.append(response.name + ", ");
        lista.append(item);  
        item.append(response.province);
        lista.append(item);     
}



function cargarImagen(numero , elementoId){
    let images = document.getElementById(elementoId);
    let newimg = document.createElement("img");

    if (numero == 11){
        newimg.setAttribute("src", "imagenes/11.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
    if (numero == 4) {
        newimg.setAttribute("src", "imagenes/4.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
    if (numero == 18){
        newimg.setAttribute("src", "imagenes/18.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
    if (numero == 1){
        newimg.setAttribute("src", "imagenes/1.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
    if (numero == 0){
        newimg.setAttribute("src", "imagenes/soleado.png");
        newimg.setAttribute("width","50");
        newimg.setAttribute("height","50");
        images.appendChild(newimg);
    }
}




