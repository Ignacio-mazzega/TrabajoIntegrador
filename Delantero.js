const Jugador = require(`./Jugador`);

class Delantero extends Jugador{
    constructor(nombre, apellido, edad, pais, num, goles, pases, regates){
        super(nombre, apellido, edad, pais, num, goles);
        this.pases = pases;
        this.regates = regates;
    }

    calcularPts(){
        return `Su puntaje es: ${this.goles + this.pases * 2 + this.regates}`;
    }

}

module.exports = Delantero;