// El contexto lo determina quien es this, this hace referencia a un oibjeto, y ahora
// vamos a ver como podemos cambiar esa referencia, para que haga diferencia a un u otro objeto
// ejemplo:

class persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}
}

const Jasan = new persona ("Jasan", ["Pedro", "Juan", "Pepe"])

// cuando nosotros llamemos a new persona JavaScript va a hacer 4 cosas:
// Primero va a crear un nuevo objeto
// Luego a ese objeto le va a asignar el prototipo persona en este caso class( que es un prototipo)
// Luego va a llamar al método constructor de la clase o la función.
// Por ultimo nos va ha retornar ese objeto que acaba de crear con el prototipo asignado
// a persona y con lo que pase en el constructor.

/* Vamos a hacer un método dentro de la clase Persona para listar amigos. */

listarAmigos () {		// La función se va a ejecutar por cada uno de los elementos que
						// tenga el array.
	this.amigos.foreach(function(amigos) {
		console.log(`El nombre guardado es ${this.nombre} y estoy acompañado de ${amigos}`)
	})
} // This en el contexto de está función no recuerda dentro del forEach que es la
  // La persona que nos devolvió el constructor.

 /* Una posible solución, es hacer una referencia en el Scope global del método ListarAmigos
 una referencia como:
 */
 const _this = this 
 // Para referenciarnos a this dentro del función ForEach.
 // No podemos referenciarnos a this usadola como constante ya que es una palabra reservada y this no puede
 // ser asignada como valor de this para esa función, para definir el contexto de esa función.

 /* En JavaScript escite un método que se llama BAIN que tiene todas las funciones. 
 Que sirve para setiar el valor de this para esa función, para definir el contexto
 de esa función.
 */

ListarAmigos(){				// Function puede ser tomado como un objeto.
	this.amigos.forEach(function(amigo) {
		console.log(`El nombre guardado es ${this.nombre} y está acompañado de ${amigos}`)
	}.bind(this)) // Hace referencia a this por fuera de la función
}
