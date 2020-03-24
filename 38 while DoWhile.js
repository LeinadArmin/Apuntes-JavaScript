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