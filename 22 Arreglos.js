//Crear arreglo
const familia = ['Daniel', 'Pamela', 'Nilda', 'Marco']

//Otra forma de crear arreglos
const arreglo = new Array('arreglo1','arreglo2','arreglo3','arreglo4')

//Insertar elemento en la posición especificada
familia[4]='Lucky'

//Insertar elemento en la última posición
familia.push('Tía Claudia')

//Insertar elemento en la primera posición
familia.unshift('Kayser')

//Quitar elemento de la última posición
familia.pop();

//Quitar elemento de la primera posición
familia.shift();

//Quitar elemento de la posición especificada y cuántos elements¿os quitar
familia.splice(2,2)

//Ordenar arreglos alfabéticamente por primera letra
let campeones=['Urgot', 'Lux', 'Nocturne', 'Olaf', 'Vayne']
campeones.sort();

campeones=[45,68,97,63,25,46,14,71,18,9,35,78,12]
campeones.sort();
//Ordenar array por numero de menor a mayor
campeones.sort(function(x, y){
    return x - y
})

//Ordenar array por numero de mayor a menor
campeones.sort(function(x,y){
    return y-x
})

console.log(campeones);











