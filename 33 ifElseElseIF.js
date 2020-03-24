// If else 
let puntaje;

if(typeof (puntaje) == 'undefined'){
    console.log('No hay puntaje');
}else{
    console.log('Hay puntaje');

}


// ElseIf
let edad = prompt('Ingrese su edad');

let etapa = function(años){

    if(edad>=0 && edad<12){
        console.log('Usted es un niño');
    }else if(edad>=13 && edad<=15){
        console.log('Usted es un preadolescente');
    }else if (edad>=16 && edad<17){
        console.log('Usted es un adolescente');
    }else if (edad>=18 && edad<30){
        console.log('Usted es un adulto joven');
    }else if (edad>=31 && edad<64){
        console.log('Usted es un adulto');
    }else if (edad>=65){
        console.log('Usted es un anciano');
    }else if (edad<0){
        console.log('Error');
    }
}

etapa(edad);

//Ternarios
let logeado = false
console.log(logeado === true ? 'Sí, está logeado' : 'No, no está logeado')

