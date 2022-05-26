var url = "https://weatherservices.herokuapp.com/api";
var urlClimaSanMiguel = "/weather/";

function main(){

    getFromUrl();

    recargar();
}

function getFromUrl(){
    $.ajax({
        url: url + urlClimaSanMiguel ,
        type: "GET",
    })
}

function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}
