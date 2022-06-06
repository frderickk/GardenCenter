var url = "https://weatherservices.herokuapp.com/api";
var urlAlertas= "/alerts/byDay";
var urlAlertaNumero0 = "/0";
var urlAlertaNumero1 = "/1";
var urlAlertaNumero2 = "/2";
var urlAlertaNumero3 = "/2";

function main(){
    Alertas();   
}

/*<div id="titulo-alerta0"></div>
<div id="estado-alerta0"></div>
<div id="fecha-hora-alerta0"></div>
<div id="descripcion-alerta0"></div>
<div id="zonas-afectadas-alerta0"></div>*/ 

function Alertas() {
    GenerarAlertas(url + urlAlertas + urlAlertaNumero0);
}
function Alertas2() {
    GenerarAlertas(url + urlAlertas + urlAlertaNumero1);
}
function Alertas3() {
    GenerarAlertas(url + urlAlertas + urlAlertaNumero2);
}
function Alertas4() {
    GenerarAlertas(url + urlAlertas + urlAlertaNumero3);
}
function GenerarAlertas(urlAlertasVariable) {
    fetch(urlAlertasVariable)
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
        for(var i=0; i<Object.keys(response).length; i++){
        mostrarRespuesta(response[i].title,"titulo-alerta" + i);
        mostrarRespuesta(response[i].status, "estado-alerta" + i);
        mostrarRespuesta(response[i].date, "fecha-hora-alerta" + i);
        mostrarRespuesta(response[i].hour, "fecha-hora-alerta" + i);
        mostrarRespuesta(response[i].description, "descripcion-alerta" + i);
        for(var j=0; j<Object.keys(response[i].zones).length; j++){
            mostrarRespuesta(response[i].zones[j], "zonas-afectadas-alerta" + i);
        }
        
    }})
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