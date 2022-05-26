function main(){
    recargar();
}

function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
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