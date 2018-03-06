// Tercera y mejor manera de crear Objetos usando clases: La nueva versión ES6
// de JS, introduce una forma más sencilla de crear objetos a partir de clases 
// usando el keyword "class". Funciona muy similar a la forma de prototipos, con
// la diferencia que no es una función y que incluye un constructor... La manera
// de crear métodos en las clases es mucho más sencilla que como habíamos visto 
// antes y para crear los objetos se hace similar a como lo hacíamos con los 
// PROTOTYPE.

class Punto {	// clase
	constructor(x, y){	// constructor
		this.x = x 	// Párametros
		this.y = y 	// Párametros
	}
	moverEnX(x) {	// Método
		this.x += x
	}
	moverEnY(y) {	// Método
		this.y += y
	}
	distancia(p) {	// Método
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x * x + y * y)	// Lógica de las operaciones.
	}
}

const p1 = new Punto(1, 5)	// Creando y guardando un new objeto pasandole atributos
const p2 = new Punto(4, 2)	// Creando y guardando un new objeto pasandole atributos

// Logeando en la consola.

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(2)
p1.moverEnY(-1)
console.log(p2.distancia(p1))

/*
 No es que existan las clases en javascript, lo que él dicen en el primer 
 vídeo es cierto puesto que lo único que se hizo en ECMAScript 2015, fue introducir 
 una “sintaxis azúcar” osea una mejora a nivel sintáctico de como se escribe el código
 (haciendo mas familiar su uso), pero no son clases como tal, 
 puesto que los objetos siguen basados en prototipos y no en clases
*/
