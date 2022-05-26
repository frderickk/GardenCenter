
function alerta()
{
var mensaje;
var opcion = confirm("Clicka en Aceptar o Cancelar");
if (opcion == true) {
    mensaje = "Has clickado OK";
} else {
    mensaje = "Has clickado Cancelar";
}
//document.getElementById("ejemplo").innerHTML = mensaje;
}

function ConfirmarCopiaEncuesta() {
    var respuesta = confirm('Esta seguro que desea copiar la encuesta?');
    if(respuesta){
      return true;
    }else{
    window.location.replace("index.html");
    return false;
    }

}