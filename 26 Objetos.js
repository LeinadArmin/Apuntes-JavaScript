const persona = {
    nombre:'Daniel',
    profesión:'Ingeniero informático',
    edad:25,
    mail:'daniel@mail.com',
    localidad:'San Antonio',
    mascotas:['Lucky','Kayser'],
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}

persona.mascotas.push('León')

console.log(persona.nacimiento());
