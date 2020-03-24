//Creando funcion IIFE
(function(parametro=false){
    let mensaje
    if(parametro){
        mensaje = 'tiene parámetros'
    }else{
        mensaje = 'no tiene parámetros'
    }
    console.log(`Esto es un IIFE. Y ${mensaje}`);
    
})(false)

// Clase con función dentro de una propiedad
musica = {
    autor:'Daniel',
    reproducir: function(grupo='Nada'){
        console.log(`Reproduciendo ${grupo}, ${musica.autor} `);
    },
    pausar: function(){
        console.log('Pausar música');
    }
}

//También se le pueden asignar funciones a una propiedad fuera de la clase. De esta forma
//podría tener muchas funciones agrupadas para distintas clases y tener el código más ordenado.
musica.borrar = function(id){
    console.log(`Borrando canción con el ID: ${id}`);
}

musica.reproducir('MetallicA');
musica.pausar();
musica.borrar(30)