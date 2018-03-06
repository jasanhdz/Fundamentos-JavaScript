function Punto (x, y) {
	/* This hace referencia a ese objeto que JavaScript esta creando cuando 
	hacemos la palabra new poniendo a la funcion que utiliza por prototipo.*/
	this.x = x // This apunta al primer argumento osea X del objeto que se crea
	// Guardamos los valores que nos llegan del objeto que se está creando 
	// por párametros en una varibale This
	this.y = y // se guarda en this el parametro 2 que se pasa por argumento
}

// estamos acceddiendo al prototipo de la función y le estamos asignando 
// un nuevo Método, el cual recibe un parametro (x o y) que asigna un nuevo valor
// a los parámetros de el prototipo punto.
Punto.prototype.moverEnX = function moverEnX(x) {
	this.x += x
}
// accedemos al prototipo de la función y le asignamos un metodo para moverY
// También le pasamos un parametro(Y) el cual recibira un argumento cuando 
// se invoque el prototipo Objeto.MétodoMoverX(argumento). Modificando el Objeto.
Punto.prototype.MoverEnY = function MoverEnY(y) {
	this.y += y
}

Punto.prototype.distancia = function distancia(p) {
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.sqrt(x * x + y * y)
}

// Crea un nuevo objeto y va asignarle como prototipo esa función Punto,
// Luego va a ejecutar el bloque de código de la función Punto que que se llama CONSTRUCTOR.
const p1 = new Punto(0, 4) // CONSTRUCTOR: New crea un nuevo objeto
						  // que hereda el prototipo Punto.

const p2 = new Punto(3, 0)

// imprime(PuntoP1.Distancia con respecto a(p2))
console.log(p1.distancia(p2))
// imprime(PuntoP2.Distancia con respecto a(p1))
console.log(p2.distancia(p1))
// PuntoP1.MetodoMoverEnAtributoX(argumento-Numero que se movera)
p1.moverEnX(10) // Modifica el objetop1 en X
// Imprime(PuntoP1.Distancia con respecto a (p2)) 
console.log(p1.distancia(p2))
p2.MoverEnY(-4) // Modifica el el objetoP2 en y.
// Imprime(PuntoP1.Distancia con respecto a(p2)).
console.log(p1.distancia(p2))
