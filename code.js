//Manuel Alejandro Garcia Salazar
alert('PROBLEMA 1');
let aumento = 10000;
let caracteresInstruccion1;
let caracteresInstruccion2;
let caracteresTotal;
let primerInstruccion;
let segundaInstruccion;
let caracteresSobrantes;
let caracteresSobrantes2;
let cadenaFinal = [];
let cadenaFinal2 = [];
let respuesta = 0;
let respuesta2 = 0;
let posicion = 0;
let posicion2 = 0;
let resultadofinal;
//validacion de cantiadad de caracteres
for(let i = 0; i < aumento; i++){
    caracteresInstruccion1 = prompt('Cantidad de caracteres de la primera instruccion');
    if(caracteresInstruccion1 >= 2 && caracteresInstruccion1 <= 50){
        break;
    }
    else{
        alert('Porfavor escriba un cantidad igual o mayor a 2 o igual o menor a 50');
        aumento++; 
    }
}
for(let j = 0; j < aumento; j++){
    caracteresInstruccion2 = prompt('Cantidad de caracteres de la segunda instruccion');
    if(caracteresInstruccion2 >= 2 && caracteresInstruccion2 <= 50){
        break;
    }
    else{
        alert('Porfavor escriba un cantidad igual o mayor a 2 o igual o menor a 50');
        aumento++; 
    }
}
for(let j = 0; j < aumento; j++){
    caracteresTotal = prompt('Cantidad total de caracteres');
    if(caracteresTotal >= 3 && caracteresTotal <= 500){
        break;
    }
    else{
        alert('Porfavor escriba un cantidad mayor o igual a 3 o menor o igual a 500');
        aumento++; 
    }
}
//validacion de cadenas de caracteres
for(let i = 0; i < aumento; i++){
    primerInstruccion = prompt('Escriba la primer instruccion');

    if(primerInstruccion.length == caracteresInstruccion1){
        break;
    }
    else{
        alert('porfavor escriba la cantidad de caracteres establecida al principio '+ '('+caracteresInstruccion1 + ')');
        aumento++;
    }
}
for(let j = 0; j < aumento; j++){
    segundaInstruccion = prompt('Escriba la segunda instruccion');
    if(segundaInstruccion.length == caracteresInstruccion2){
        break;
    }
    else{
        alert('porfavor escriba la cantidad de caracteres establecida al principio '+ '('+caracteresInstruccion2+ ')');
        aumento++;
    }
}
//calculo para identificar la cantidad de caracteres que se colocaran antes y despues del mensaje
caracteresInstruccion1 = Number(caracteresInstruccion1);
caracteresInstruccion2 = Number(caracteresInstruccion2);
caracteresTotal = Number(caracteresTotal);

caracteresSobrantes = caracteresTotal - caracteresInstruccion1.length;
caracteresSobrantes2 = caracteresTotal - caracteresInstruccion2.length;


// cadenaFinal = [primerInstruccion + segundaInstruccion];
let cantidad = 1;
//conversion a string
primerInstruccion = String (primerInstruccion);
segundaInstruccion = String (primerInstruccion);


//funcion generador de caracteres
function generadorCaracteres(length) {
    let resultado= '';
    let caracteres= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let caracteresLength = caracteres.length;
    for ( var i = 0; i < length; i++ ) {
       resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    return resultado;
}


//asignacion a arreglo de cadenas para generar el mensaje
cadenaFinal = primerInstruccion;
cadenaFinal2= segundaInstruccion;
//se aplican los caracteres aleatorios a las dos cadenas
for(let k = 0; k < caracteresSobrantes; k++){
    if(posicion == 0){
        cadenaFinal = [generadorCaracteres(1) + cadenaFinal];
        posicion = 1;
    }
    else{
        cadenaFinal = [cadenaFinal + generadorCaracteres(1)];
        posicion = 0;
    }
}
for(let k = 0; k < caracteresSobrantes2; k++){
    if(posicion == 0){
        cadenaFinal2 = [generadorCaracteres(1) + cadenaFinal2];
        posicion2 = 1;
    }
    else{
        cadenaFinal2 = [cadenaFinal2 + generadorCaracteres(1)];
        posicion2 = 0;
    }
}
cadenaFinal = String (cadenaFinal);
cadenaFinal2 = String (cadenaFinal2);
//validacion de caracteres repetidos
for(let i = 0; i < cadenaFinal.length; i++){
    if(cadenaFinal.charAt(i) == cadenaFinal.charAt(i+1)){
        respuesta = 1;
        break;
    }else{
        respuesta = 0;
    }
}
for(let i = 0; i < segundaInstruccion.length; i++){
    if(cadenaFinal2.charAt(i) == cadenaFinal2.charAt(i+1)){
        respuesta2 = 1;
        break;
    }else{
        respuesta2 = 0;
    }
}
//validacion de mensajes
//mensaje 1
if(respuesta == 0){
    alert('1   SI');
}
else if(respuesta == 1){
    alert('1   NO'); 
}
//mensaje 2
if(respuesta2 == 0){
    alert('2  SI');
}
else if(respuesta2 == 1){
    alert('2  NO'); 
}












//PROBLEMA 2
alert('PROBLEMA 2');
let cantidadRondas;
let jugador1P = [];
let jugador2P = [];
let ventajaMayor = [];
let cantidadMayor1 = 0;
let cantidadMayor2 = 0;
for(let t = 0; t < aumento; t++){
    cantidadRondas = prompt('Cual sera la cantidad de rondas?');
    if(cantidadRondas > 0 && cantidadRondas <= 10000){
        break;
    }
    else{
        alert('Porfavor escribe una cantidad menor o igual a 10000');
    }
}
let ronda = 1;
for(let i = 0; i < cantidadRondas; i++){
    alert("RONDA " + ronda);
    jugador1P[i] = prompt('cual fue el marcador del jugador 1'); 
    jugador2P[i] = prompt('cual fue el marcador del jugador 2'); 
    ronda++;
    jugador1P[i] = Number(jugador1P[i]);
    jugador2P[i] = Number(jugador2P[i]);
}
//calcular la ventaja de cada ronda
for(let i = 0; i < cantidadRondas; i++){
    //gana el jugador 1
    if(jugador1P[i] > jugador2P[i]){
        ventajaMayor[i] = jugador1P[i] - jugador2P[i];
        if(cantidadMayor1 < ventajaMayor[i]){
            cantidadMayor1 = ventajaMayor[i];
        }
    }
    //gana el jugador 2
    if(jugador2P[i] > jugador1P[i]){
        ventajaMayor[i] = jugador2P[i] - jugador1P[i];
        if(cantidadMayor2 < ventajaMayor[i]){
            cantidadMayor2 = ventajaMayor[i];
        }
    }
}
//validacion de ganador
if(cantidadMayor1 > cantidadMayor2){
    alert('1 '+ cantidadMayor1);
}
else if(cantidadMayor2 > cantidadMayor1){
    alert('2 ' + cantidadMayor2);
}











