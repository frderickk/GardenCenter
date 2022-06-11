var url = "https://weatherservices.herokuapp.com/api";
var urlAlertas= "/alerts/byDay";
var urlAlertaNumero0 = "/0";
var urlAlertaNumero1 = "/1";
var urlAlertaNumero2 = "/2";
var urlAlertaNumero3 = "/3";

function main(){
    Alertas();
    Alertas2();
    Alertas3();
    Alertas4();  
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

    enviarFechas();
}

function enviarFechas() {
    var i = 0;
    fetch(url + urlAlertas + "/" + 0)
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
        mostrarRespuesta(response[0].date, "alertas-dia" + 0);    
    })

    fetch(url +urlAlertas + "/" + 1 )
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
        mostrarRespuesta(response[0].date, "alertas-dia" + 1); 
    })

    fetch(url +urlAlertas + "/" + 2 )
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
        mostrarRespuesta(response[0].date, "alertas-dia" + 2); 
    })

    fetch(url +urlAlertas + "/" + 3 )
    .then(response => response.json()) 
    .then(response => response['alerts'])
    .then(response => {
        mostrarRespuesta(response[0].date, "alertas-dia" + 3); 
    })
}

function mostrarRespuesta(response , elementoId){
    let lista = document.getElementById(elementoId);
    let item = document.createElement("p");
    if (response != null){
        item.append(response);
        lista.append(item); 
    }
    item.append(" ");
    lista.append(item); 
     
}

function enviarRespuesta(response , elementoId){
    var text = document.createTextNode(response);
    document.getElementById(elementoId).append(text);
}