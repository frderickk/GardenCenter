
function main() {  
    ocultarDiv("resultado-cargar");
}

function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}

var nuevaFamilia = {
    nombre: "nombre"
};


function compararDatoFamilia() {
    let plantaFamilia = document.getElementById("campo_familia").value;
    if(nuevaFamilia.nombre != plantaFamilia){
        console.log(plantaFamilia);
        var opcion = confirm("La familia ingresada no existe, clickee en aceptar para cargar familia");
        if (opcion == true) {
            location.href = "ingresofamilia.html";
        } else {
            mensaje = "Has clickado Cancelar";
            recargar();
        }
    }
    else{
        window.alert("La planta se ingreso correctamente");
        ocultarDiv("formBox");
        mostrarDatoCargado("campo_nombre","nombre-planta");
        mostrarDatoCargado("campo_familia","nombre-familia");
        mostrarDatoCargado("campo_fila","nombre-fila");
        mostrarDatoCargado("campo_columna","nombre-columna");
        mostrarDatoCargado("campo_Edad","nombre-edad");
        mostrarDiv("resultado-cargar");
    }
}

function ocultarYMostrarEnFamilia(){
    window.alert("Se ingreso correctamente su planta");
    ocultarDiv("formBox");
    mostrarDatoCargado("campo_nombre","nombre-comun");
    mostrarDatoCargado("campo_familia1","nombre-cientifico");
    mostrarDatoCargado("campo_color","nombre-color");
    mostrarDatoCargado("campo_fruto","nombre-fruto");
    mostrarDatoCargado("campo_clase","nombre-clase");
    mostrarDatoCargado("campo_suelo","nombre-suelo");
    mostrarDatoCargado("campo_riego","nombre-riego");
    mostrarDatoCargado("campo_temperatura","nombre-temperatura");
    mostrarDiv("resultado-cargar");
}

function mostrarDatoCargado(campoOrigen, campoDestino){
    let plantaFamilia = document.getElementById(campoOrigen).value;
    enviarRespuesta(plantaFamilia, campoDestino);
}

function mostrarDiv(campoAMostrar)
{
    document.getElementById(campoAMostrar).style.display = '';
}

function ocultarDiv(campoAOcultar)
{
    document.getElementById(campoAOcultar).style.display = "none";
}

function enviarRespuesta(response , elementoId){
    var text = document.createTextNode(response);
    document.getElementById(elementoId).append(text);
}

/*var datosPlantas = []

function agregarDatosPlantas(nombre, familia, fila, columna, edad) {
    
    var nuevaPlanta = {
        nombre: nombre,
        familia: familia,
        fila: fila,
        columna: columna,
        edad: edad
    };

    console.log(nuevaPlanta); 
    datosPlantas.push(nuevaPlanta);
}

function obtenerListaPlantas() {
    return datosPlantas;
}

function guardarDatosPlantas() {
    var guardarPlantaNombre = document.querySelector('#nombre').value,
        guardarPlantaFamilia = document.querySelector('#familia').value,
        guardarPlantaFila = document.querySelector('#fila').value;
        guardarPlantaColumna = document.querySelector('#columna').value;
        guardarPlantaEdad = document.querySelector('#edad').value;
    
    agregarDatosPlantas(guardarPlantaNombre, guardarPlantaFamilia, guardarPlantaFila, guardarPlantaColumna, guardarPlantaEdad);
}*/