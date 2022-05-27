var url = "https://weatherservices.herokuapp.com/api";
var urlClimaSanMiguel = "/weather/";

function main(){

    fetch(url + urlClimaSanMiguel)
    .then(response => response.json()) 
    .then(response => response['items']['0']['forecast']['forecast'])
    .then(response => {
        mostrarFecha(response, "lista-fecha");
        mostrarTempMax(response, "lista-tempMax" );
        mostrarTempMin(response, "lista-tempMin" );
        mostrarDescManiana(response,"lista-maniana");
        mostrarDescTarde(response,"lista-tarde");
    })
    .then(mostrarImagen)
    .then(response => console.log(response));
    
}

function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}

function mostrarFecha(response , elementoId){
    let lista = document.getElementById(elementoId);
    Object.keys(response).forEach(key => {   
        //console.log(key, response[key].date);
        let item = document.createElement("li");
        item.append(response[key].date);
        lista.append(item);       
    });
}

function mostrarTempMax(response , elementoId){
        let lista = document.getElementById(elementoId);
        Object.keys(response).forEach(key => {   
            //console.log(key, response[key].date);
            let item = document.createElement("li");
            item.append(response[key].temp_max);
            lista.append(item);       
        });
}

function mostrarTempMin(response , elementoId){
    let lista = document.getElementById(elementoId);
    Object.keys(response).forEach(key => {   
        //console.log(key, response[key].date);
        let item = document.createElement("li");
        item.append(response[key].temp_min);
        lista.append(item);       
    });
}

function mostrarDescManiana(response , elementoId){
    let lista = document.getElementById(elementoId);
    Object.keys(response).forEach(key => {   
        //console.log(key, response[key].date);
        let item = document.createElement("li");
        item.append(response[key].morning.description);
        lista.append(item);
        mostrarImagen(response[key].morning.weather_id, elementoId);
      
    });
}

function mostrarDescTarde(response , elementoId){
    let lista = document.getElementById(elementoId);
    Object.keys(response).forEach(key => {   
        //console.log(key, response[key].date);
        let item = document.createElement("li");
        item.append(response[key].afternoon.description);
        lista.append(item);       
    });
}

function mostrarImagen(numero , elementoId){
    let images = document.getElementById(elementoId);
    let newimg = document.createElement("img");
    if(numero == 4){
    newimg.setAttribute("src", "imagenes/lluvia.jpg");
    images.appendChild(newimg);
    }
    if (numero == 18){
        newimg.setAttribute("src", "imagenes/cielonublado.jpg");
        images.appendChild(newimg);
    }
}


