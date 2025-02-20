//JS para dinamizar el juego
//Para saber cuantos amigos se ingresaron. Una primer idea para que una Pantalla maso....
let intentos = 0;
//Variable que controla la cantidad de amigos ingresados. Y se usa para el calc aleatorio obvio
let limitador = 5;
let lista_amigos = [];

//Funcion para limpiar la caja (unica por ahora) que tenemos
function limpiarCaja() {
    document.querySelector('#nbreAmigo').value = '';
    document.querySelector('#nbreAmigo').focus();
}

//Otra funcion que es interesante como para usar en otros programas
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Cada vez que el Sorteo se hace, reinciamos el juego con esta funciòn
function condicionesIniciales() {
    console.log(intentos);
    intentos = 0;
    lista_amigos = [];
    //advertimos el limitador (dinámico...hasta ahí) que pusimos
    asignarTextoElemento('p',`(se pueden ingresar hasta ${limitador} amigos)`);
}

//Asociada al boton de Sorteo
function sortearAmigo() {
    //
    cant_elem = lista_amigos.length,
    numeroAleat =  Math.floor(Math.random()*cant_elem);
    console.log(numeroAleat);
    //document.querySelector('#nbreAmigo').value = '';
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = `El amigo escogido fue: ${lista_amigos[numeroAleat]}`;
    condicionesIniciales();
}

//Asociada al boton para Añadir un amigo nuevo
function agregarAmigo() {
    //esto lo coloco por si se juega por segunda vez. Sinó habría que poner otro boton
    if (intentos == 0) {
        document.getElementById("resultado").innerHTML = "";
    }
    let nbre_amigo = document.getElementById('nbreAmigo').value;
    //Si el nombre de amigo ingresado está incluido en la lista 
    if (typeof nbre_amigo === "string" && nbre_amigo.length === 0) {
        window.alert("Ingrese texto válido")
        return
    }
    //Si se llegó al Limite de amigos
    if (intentos == limitador) {
        window.alert("No se puede agregar mas Amigos. Ir a Sortear")
        limpiarCaja();
        return
    }
    if (lista_amigos.includes(nbre_amigo)) {
        window.alert("ya existe ese amigui")
        } else {
        intentos++;
        let lista_amostrar = document.getElementById("listaAmigos");
        let nuevo_amigo = document.createElement("li");
        nuevo_amigo.textContent = nbre_amigo;
        nuevo_amigo.setAttribute("role", "listitem");
        lista_amostrar.appendChild(nuevo_amigo);
        //agrega el amigo ingresado a la Lista creada
        lista_amigos.push(nbre_amigo);
        console.log(nbre_amigo);
        //borra la caja del Input
        limpiarCaja();
        //if (intentos == limitador) {
        //    window.alert(`Es el último amigo. Llegaste a ${limitador}`)
        //}
    }
}
condicionesIniciales();
