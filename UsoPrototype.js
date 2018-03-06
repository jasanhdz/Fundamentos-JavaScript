/* Usando prototipos: Podemos usar prototipos para crear objetos que heredan los
mismos atributos y los mismos métodos. Para construir el prototipo se hace de la
siguiente forma:
*/

function Prototipo(parametroA, parametroB) {
	this.atributo = parametroA,
	this.atributo2 = parametroB
}

/* Crear objeto: Para crear el objeto, se define la variable y se usa el keyword
"new" + el nombre del prototipo. Podemos crear cualquier cantidad de objetos 
a partir del prototipo ya definido:
*/
let firstPersona = new Prototipo("David", 17)

/* Métodos y prototipos: La mejor forma de crear métodos en los prototipos, 
para que sean heredados por los objetos. no es dentro de la función Prototipo.
La mejor forma es haciendo uso de ".prototype" de la siguiente forma:
*/

Prototipo.prototype.changeA = function changeA(newA) {
	this.atributo = newA
}

/* ES importante tenener en cuenta que si se modifica el método en un objeto, este
método sera modificado en todos los objetos del mismo prototipo.
*/