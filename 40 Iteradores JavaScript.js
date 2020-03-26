const ciudades = ['San Antonio', 'Santiago', 'Valparaíso', 'Viña del mar'];
const ordenes = new Set([101, 202, 303, 404]);
const datos = new Map();
datos.set('Nombre', 'Daniel');
datos.set('Edad', 25)


//Iteraciones con entries()
for(let entradaCiudades of ciudades){
    console.log(entradaCiudades);
}

for (let entradaOrdenes of ordenes.entries()){
    console.log(entradaOrdenes);
} 

for (let entradaDatos of datos.entries()){
    console.log(entradaDatos);
}

//Iteraciones con values()
for (let valueCiudades of ciudades.values()){
    console.log(valueCiudades);
}

for (let valueOrdenes of ordenes.values()){
    console.log(valueOrdenes);
}

for (let valueDatos of datos.values()){
    console.log(valueDatos);
}

//Iteraciones con keys
for (let keyDatos of datos.keys()){
    console.log(keyDatos);
}

//Iterando sobre una cadena de texto con la forma antigua
const mensaje = 'Iterando sobre una cadena de texto'
for(let i = 0; i < mensaje.length; i++){
    console.log(mensaje[i]);
}

//Iterando sobre una cadena de texto con a forma nueva
for (let letra of mensaje){
    console.log(letra);
}

const sitios = document.getElementsByTagName('a')

for (let sitio of sitios){
    console.log(sitio.href);
    
}