const Jugador = require(`./Jugador`);

class Arquero extends Jugador{
    constructor(nombre, apellido, edad, pais, num, goles, atajadas){
        super(nombre, apellido, edad, pais, num, goles);
        this.atajadas = atajadas;
    }

    calcularPts(){
        return `Su puntaje es: ${this.goles * 3 + this.atajadas * 3}`; 
    }
}

module.exports = Arquero;