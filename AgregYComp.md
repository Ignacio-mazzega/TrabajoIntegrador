# Agregación

**La agregación es un tipo de asociación que indica que una clase es parte de otra clase. Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas). La destrucción del compuesto no conlleva la destrucción de los componentes.** 

La agregación se representa en UML mediante un diamante de color blanco colocado en el extremo en el que está la clase que representa el “todo”.

![EjemploA](https://www.didierperez.com/wp-content/uploads/2012/02/uml-relacion-agregacion.jpg)

La ClaseA agrupa varios elementos del tipo ClaseB.
### Ejemplo

![Empresa](https://www.seas.es/blog/wp-content/uploads/ScreenShot081.png)

* Tenemos una clase Empresa.
* Tenemos una clase Cliente.
* Una empresa agrupa a varios clientes.

# Composición

**Similar a la relación de Agregación solo que la Composición es una relación mas fuerte. Aporta documentación conceptual ya que es una "relación de vida", es decir, el tiempo de vida de un objeto está condicionado por el tiempo de vida del objeto que lo incluye.**

Se representa con una flecha que parte de una clase a otra en cuya base hay un rombo de color negro.

![EjemploC](https://www.didierperez.com/wp-content/uploads/2012/02/uml-relacion-composicion.jpg)

### Ejemplo

![Empresa](https://www.seas.es/blog/wp-content/uploads/ScreenShot082.png)

* Tenemos una clase Empresa.
* Un objeto Empresa está a su vez compuesto por uno o varios objetos del tipo empleado.
* El tiempo de vida de los objetos Empleado depende del tiempo de vida de Empresa, ya que si no existe una Empresa no pueden existir sus empleados.

