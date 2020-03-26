//ForEach
const geles = ['Pablo', 'Seba', 'Fito', 'Marín', 'Panchu', 'Gonzalo', 'Nico']

geles.forEach(function(gele, index){
    console.log(`${index}: ${gele}`);
    
})

//Map
const mascotas = [
    {id:1,nombre:'Lucky',edad:11},
    {id:2,nombre:'Kayser',edad:1},
    {id:3,nombre:'Sasha',edad:4},
    {id:4,nombre:'Balto',edad:1}
]

const nombreMascotas = mascotas.map(function(mascotas){
    return mascotas.nombre;
})

console.log(nombreMascotas);

//Iterar en un objeto con For
const persona = {
    nombre: 'Daniel',
    edad: 25,
    profesión: 'Ingeniero informático'
}

for (let propiedad in persona){
    console.log(`${propiedad} : ${persona[propiedad]}`);
}