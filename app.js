
//Crear un array que guarde los nombre de los amigos
let amigos = [];
let indiceAleatorio = 0;
let amigoSorteado = '';

//Función para agregar un amigo
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
    return;
 }
 //Función para limpiar campo de texto 
 function limpiarCampo(){
    document.querySelector('#amigo').value = '';
    return;
 }

 //Función para actualizar la lista de amigos
 function agregarLista(){ 
   let listaHTML = document.getElementById('listaAmigos');
   listaHTML.innerHTML = '';//Limpia la lista
   for (let i = 0; i < amigos.length; i++){
      listaHTML.innerHTML += `<li>${amigos[i]}</li>`;// Crea y agrega un elemento a la lista, recorriendo el array según su longitud	
   }
   return;
}
   // Función para sortear los amigos
   function sortearAmigo() { 
      
     console.log(indiceAleatorio);
     // Validar si hay amigos disponibles en la lista
      if (amigos.length === 0){
         alert('¡La lista esta vacia, agrega amigos para sortear!');
      } else {
         indiceAleatorio = Math.floor(Math.random() * amigos.length ); // Genera un numero aleatorio según la longitud del array
         amigoSorteado = amigos[indiceAleatorio]; // Obtiene el nombre del amigo sorteado
        document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`; // Muestra el amigo sorteado en el HTML 
      }
 
   }

   



 

 
