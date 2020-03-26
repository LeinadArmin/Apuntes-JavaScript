// While Loop. Se ejecuta mientras la condición del while sea verdadera
let i = 0;
while(i < 10){
    if(i == 4){
        console.log('Cuatro');
        i++;
        continue;
    }

    console.log(`El índice es: ${i}`);
    i++;
}

const reproductor = ['Canción1','Canción2','Canción3']
i = 0;
while(i<reproductor.length){
    console.log(`${reproductor[i]}`);
    i++;
    
}

// Do While. Se ejecuta al menos una vez, y si la condición es verdadera se continúa ejecutando
i = 0;
do{
    console.log(`El número actual es ${i}`);
    i++;
}while(i < 10)