# Polimorfismo 

>En programación orientada a objetos el polimorfismo se refiere a la posibilidad de definir clases diferentes que tienen métodos o atributos denominados de forma idéntica, pero que se comportan de manera distinta.

* Es una propiedad de la programación orientada a objetos.
* Se hace uso de herencia para compartir atributos y comportamientos. 
* Los objetos reaccionan de forma distinta ante el mismo llamado. 

  * Cada cual sabe como comportarse de acuerdo a quien es y sus características.
  * Programación: hablamos de distintas implementaciones ante una misma llamada.

## Ejemplo en la vida real:

Para este ejemplo vamos a valorar a los jugadores de un equipo de fútbol en un partido.

La puntuación de cada jugador se calcula, según la posición que ocupa en el campo de juego, con las siguientes fórmulas:

>* **Arquero:** Goles * 3 + Tiros atajados * 3
 
>* **Defensor:** Goles * 2 + Pases + Recuperaciones*2 
 
>* **Delantero:** Goles + Pases * 2 + Regates 
 
Primero creamos la clase Jugador, que será la clase padre y además es un concepto abstracto, es decir, que no sabemos que posición ocupa el jugador, por lo tanto no se puede instanciar. Esta clase contendrá:

* Como atributos: Nombre, Apellido, Edad, País, Número y Goles del jugador.
* Como métodos: La función "presentarse" que es una presentación del jugador con sus datos, el método golesPartido que muestra la cantidad de goles que hizo el jugador, y la función calcularPts que calcula el puntaje que obtuvo el jugador según las fórmulas que están más arriba, esta función también será abstracta por lo que las subclases o clases hijas deberán implementar si o si este método.

![Diagrama](https://scontent.fmdz1-1.fna.fbcdn.net/v/t1.0-9/104962802_273903973826603_2192432834748454868_n.jpg?_nc_cat=105&_nc_sid=730e14&_nc_oc=AQnd-YwgBLhW6P9xDbjqE6epoNnfvQwH3BzHTfJEIn5OOzZvd8Op1eJbAvAU3rf2AtQ&_nc_ht=scontent.fmdz1-1.fna&oh=fe56e911ac32efa3b3dd2add1f604a3e&oe=5F180FB8)

Todos los atributos y métodos de la clase padre, es decir Jugador, serán heredados por las clases hijas, Arquero, Defensor y Delantero. Como vemos, el método calcularPts está implementado en todas las subclases ya que es un método abstracto.

La clase Arquero además de heredar los atributos y métodos de la clase Jugador, implementará el atributo "Atajadas", la clase Defensor hará lo mismo con los atributos "pases" y "recuperaciones" y la clase Delantero lo propio con "pases" y "regates".