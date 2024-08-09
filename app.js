


let numeroMaximo= 10;
let listaNumerosSorteados= [];
let numeroSecreto = generarNumeroSecreto();
let intentos=1;


console.log(numeroSecreto);//para verlo en la consola del navegador es con f12 o yendo a herramientas de desarrollador
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    // console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);//para verlo en la consola del navegador es con f12 o yendo a herramientas de desarrollador
    
    console.log(numeroDeUsuario === numeroSecreto);
    //el triple = sirve para verificar que los dos valores sean igual en 
    //valor e igual en tipo, cuando colocas dos, solo se verifica
    //el valor
    if(numeroDeUsuario== numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor, intenta de nuevo');

        }else{
            asignarTextoElemento('p','El numero secreto es mayor, intenta de nuevo');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value ='';
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    
    //si ya sorteamos todos los numeros, debemos terminar el juego
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles mano, ya fue');
        
    }
    //si el numero generado esta dentro de la lista, generamos otro
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
    //en esta parte del codigo tuve este error : Se ha detectado código inaccesible.ts(7027) en los dos
    //ifs que habia puesto, y fue porque coloque ese codigo luego del return, y de esa forma los dos ifs nunca
    //se iban a ejecutar porque luego del return se termina la funcion, la solucion fue mover el return al final
    //o borrarlo
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numerito secretoso');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo} prro`); 
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar nuevo numero aleatorio
    
    //deshabilitar el boton de nuevo juego
    //inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
//asignarTextoElemento('h1', 'Juego del numerito secretoso');
//Hoisting: al leer el codigo, javascript primero revisa si hay funciones
//de ser asi las lee primero de modo que esten disponibles para cuando lea el resto del codigo
//asi que no importa el orden en el que coloquemos las funciones
//asignarTextoElemento('p', 'indica un numero del 1 al 10 prro'); 
condicionesIniciales();
//control+F en vs code nos da un buscador para poder encontrar partes del codigo que nos interesan