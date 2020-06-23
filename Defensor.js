const Jugador = require(`./Jugador`);

class Defensor extends Jugador{
    constructor(nombre, apellido, edad, pais, num, goles, pases, recuperaciones){
        super(nombre, apellido, edad, pais, num, goles);
        this.pases = pases;
        this.recuperaciones = recuperaciones;
    }

    calcularPts(){
        return `Su puntaje es: ${this.goles * 2 + this.pases + this.recuperaciones * 2}`;
    }

}

module.exports = Defensor;