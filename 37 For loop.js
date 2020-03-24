// Ciclo for con sentencia "continue". 
console.log('ITERACIÓN CON SENTENCIA CONTINUE');

for(let i = 0; i < 10; i++){
    if(i == 4){
        console.log(`Vamos en el índice cuatro`);
        continue; // ----> Permite continuar con el ciclo a partir de la siguiente iteración, saltando la actual
    }else{

    }
    console.log(i);
}

console.log('---------------- \n' + 
            '---------------- \n' +
            '----------------');

// Ciclo for con sentencia "break"
console.log('ITERACIÓN CON SENTENCIA BREAK');
for(let i = 0; i < 10; i++){
    if(i == 4){
        console.log('El ciclo llega hasta esta iteración');
        break;
    }
    console.log(i);
    
}

console.log('---------------- \n' + 
            '---------------- \n' +
            '----------------');

// Condiciones dentro del ciclo for
console.log('ITERACIÓN CON CONDICINAL');
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(`El número ${i} es par`);
        
    }else{
        console.log(`El número ${i} es impar`);
        
    }
}

// Recorrer el largo de un arreglo
const familia = ['Marco', 'Perly', 'Daniel', 'Pamela']
for(let i = 0; i < familia.length; i++){
    console.log(`${familia[i]}`);
}

