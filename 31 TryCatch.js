try {
    obtenerClientes()
} catch (error) {
    console.log(error);
} finally {
    console.log('Este es el "Finally" que se ejecuta de todas formas independiente del resultado en el TryCatch');
    
}


function obtenerClientes(){
    console.log('Descargando...');
    
setTimeout(function(){
    console.log('Completo');
},3000)    
}