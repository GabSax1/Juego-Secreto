
let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento(){
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego de Número secreto');
    asignarTextoElemento('p',`Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar numero secreto
    //reiniciar intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');

    
}
function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
        //si el numero generado esta en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();