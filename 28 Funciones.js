function saludar(nombre='Campo vacío', tipo='Campo vacío'){
    console.log(`Paciente:
Nombre: ${nombre}
Tipo:   ${tipo}`);
}

saludar('Daniel', 'Humano');

// Resta con Function Declaration
// function restar(a,b){
//     return a-b;
// }

// let resta = restar(4,3)

// console.log(resta);


//Suma con Function Expression
const suma = function(a,b){
    return a+b
}

console.log(suma(1,3));

//Resta con Function Expression
// const resta = function(a=4,b=2){
//     return a-b;
// }

// console.log(resta(10,5));

