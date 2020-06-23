
class Jugador{
    constructor(nombre, apellido, edad, pais, num, goles){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pais = pais;
        this.num = num;
        this.goles = goles;
    }

    presentarse(){
        return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años, soy de ${this.pais} y uso el número ${this.num}`;
    }

    calcularPts(){
        throw Error("Esta es una clase abstracta, no se puede implementar este método.");
        
    }

    golesPartido(){
        return `En el partido hice ${this.goles} goles.`;
    }

}

module.exports = Jugador;