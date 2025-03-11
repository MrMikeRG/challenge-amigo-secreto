//Crear un array que guarde los nombre de los amigos
let amigos = [];



//Función para agregar una amigo
 function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === ''){
        alert('El campo no puede estar vacio')
    }else{
    amigos.push(nombre);
    limpiarCampo();
    console.log(amigos);
    }
 }
 //Limpiar campo de texto 
 function limpiarCampo(){
    document.querySelector('#amigo').value = '';
 }

 //Función para actualizar la lista de amigos
 
