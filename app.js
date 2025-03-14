//Crear un array que guarde los nombre de los amigos
let amigos = [];


//Función para agregar una amigo
 function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === ''){
        alert('El campo no puede estar vacio')
    }else{
    amigos.push(nombre);
    agregarLista();
    }
    limpiarCampo();
    console.log(amigos);
 }
 //Limpiar campo de texto 
 function limpiarCampo(){
    document.querySelector('#amigo').value = '';
 }

 //Función para actualizar la lista de amigos

 //Agregar lista de amigos
 function agregarLista(){
   let listaHTML = document.getElementById('listaAmigos');
   listaHTML.innerHTML = '';//Limpia la lista
   for (let i = 0; i < amigos.length; i++){
      listaHTML.innerHTML += `<li>${lista[i]}</li>`;// Crea y agrega un elemento a la lista, recorriendo el array según su longitud	
   }
      

 }

 
