var url = "https://weatherservices.herokuapp.com/api";
var urlClimaSanMiguel = "/weather/";

function main(){

    fetch(url + urlClimaSanMiguel)
    .then(response => response.json()) 
    .then(response => response['items']['0']['forecast']['forecast'])
    .then(response => {
        mostrarDatos(response, "lista-clima");
    })
    .then(response => console.log(response));
}

/*function getFromUrl(){
    $.ajax({
        url: url + urlClimaSanMiguel ,
        type: "GET",
    })
}
*/
function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}

function mostrarDatos(response , elementoId){
    let lista = document.getElementById(elementoId);

    Object.keys(response).forEach(key => {
        
        //console.log(key, response[key].date);

        let item = document.createElement("li");

        item.append(response[key].afternoon.weather_id);
        item.append(response[key].temp_max);
        item.append(response[key].temp_min);
        //item.append(response[key].date);

        lista.append(item);
        
    });
}
