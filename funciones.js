
function main() {  
   // document.querySelector('#cargar').addEventListener('click', guardarDatosPlantas);
   //compararDatoFamilia(); 
   //recargar();
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
        }
        //window.alert("La familia ingresada no existe");
    }
    else{
        window.alert("La planta se ingreso correctamente");
        recargar();
    }

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