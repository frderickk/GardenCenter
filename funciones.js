
function main() {  
   // document.querySelector('#cargar').addEventListener('click', guardarDatosPlantas);
    recargar();
}

function recargar() {
    let refresh = document.getElementById('ingresar_planta')
    refresh.addEventListener('click', _ => {
        location.reload();
    })
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