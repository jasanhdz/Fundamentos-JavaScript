// <<<<<<< USANDO FUNCIONES PROTOTYPE >>>>>>>>>>>>>>

// function Punto(x, y){
// 	this.x = x
// 	this.y = y
// }

// Punto.prototype.moverEnX = function moverEnX(x) {
// 	this.x = this.x + x
// }

// Punto.prototype.moverEnY = function moverEnY(y) {
// 	this.y = this.y + y
// }

// Punto.prototype.distancia = function distancia(p) {
// 	const x = this.x - p.x 
// 	const y = this.y - p.y

// 	return Math.sqrt(x * x + y * y)
// }

//<<<<<<<<<<<< USANDO OBJETOS >>>>>>>>>>>>>>>>>>>

// Esta es una manera muy similar de crear objetos en JavaScript, pero en esta ocación
// Usamos Objetos pasando funciones a sus atribrutos, ya que en el método anterior usabamos 
// Una función que y la ocupabamos como prototipo cuando creabamos un constructor.

// >> Creamos un OBJETO = { } que va a recibir funciones a las cuales llamaremos Métodos
// La Primera función debe inicializar y guardar los valores 
// del constructor que se está creando
const Punto = {
	init: function (x, y) { // Método-Función inicializar que tiene 2 párametros (x, y)
							// Los cuales serviran para que ahi pasemos los argumntos del constructor	
		this.x = x // This hace referencia al Valor que se crea en el constructor 
				   // del atributo x y lo guarda en x de la función init
		this.y = y // This hace referencia al Valor que se crea en el constructor
	},			   // del atributo (y) y lo guarda en y de la función init.
	
	// Atributo que guarda una función moverEnX, como buena práctica el atributo debe
	// ser igual al nombre de la función que guarda
	moverEnX: function moverEnX(x) {
		this.x += x // This hace referencia al Valor que tiene el Constructor en su argumento X,
					// despues le suma un nuevo valor x que será pasado como un nuevo argumento,
					// al final lo suma así mismo.
	},
	moverEnY: function moverEnY(y) {
		this.y += y // This hace referencia al Valor que tiene el constructor en su argumento Y,
					// despues le suma un nuevo valor y que será pasado como un nuevo argumento,
					// al final lo suma así mismo.
	},

	//Atributo que guarda una función distancia.
	distancia: function distancia(p) {
		// la funcion crea una Variable X donde guardara la diferencia del Valor que tiene el constructor 
		// en su argumento x - el p(punto.x) que nos pasaron por párametro
		// Es decir al punto que nos pasaron por párametro accedemos a su atributo x
		// Esto es p1(1,3) - p2(4,5)
		//	este.x - p2.x = 1 - 4 = 3 que se guardara en const x
		const x = this.x - p.x // 3
		const y = this.y - p.y // 2

		// Despues Retornamos la raiza cuadrada con respecto a las variables const 
		return Math.sqrt(x * x + y * y)
	} 
}

// Como usamos objetos y no prototipos tenemos que Crear objetos de la siguiente manera:
// tipo objeto1 = OBJETO.CREAR(del objeto PUNTO) 
const p1 = Object.create(Punto)
const p2 = Object.create(Punto)

// ahora solo inicializamos el objeto de la siguiente manera
// Objeto.inicializar(argumentos con los que construye el objeto)
// Está es una manera similar a la función del constructor.
p1.init(1, 3)
p2.init(4, 5)

// Ahora solo imprimos en consola la distancia de los dos puntos
// o tambien podemos mover los puntos de los objetos creados 
// al hacerlo podemos obtener el resultado para cualquier punto.

console.log (p1.distancia(p2))
p1.moverEnX(2)
p1.moverEnY(4)
console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1 
