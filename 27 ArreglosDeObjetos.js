const pacientes = [
    {nombre:'Kayser', tipo: 'Perro', edad: 1},
    {nombre:'Lucky', tipo: 'Perro', edad: 10},
    {nombre:'León', tipo: 'Gato', edad: 6},
    {nombre:'Mimi', tipo: 'Perro', edad: 12},
]


//Mostrar datos con string literal dentro de un for
for(let i = 0; i<pacientes.length; i++){
    console.log(`
String Literal    
${[i+1]}. 
Nombre de paciente: ${pacientes[i].nombre} 
Tipo: ${pacientes[i].tipo}`);
    
}

//Mostrar datos con for sin string literal
for(let i=0; i<pacientes.length; i++){
    console.log('Sin String literal \n' + 
'Nombre de paciente: ' + pacientes[i].nombre + '\n' +
' ');
    
}

//Modificando un elemento completo del arreglo de objetos
pacientes[0]={
    nombre:'Daniel', tipo: 'Humano', edad: 25
}

console.log(pacientes);

//Insertando un nuevo elemento en el arreglo de objetos
pacientes.push(
    {nombre: 'Pamela', tipo: 'Humano', edad:22}
)

console.log(pacientes);

//Modificando una propiedad del elemento (objeto) en el arreglo de objetos
pacientes[0].nombre='Francisco'
console.log(pacientes);

