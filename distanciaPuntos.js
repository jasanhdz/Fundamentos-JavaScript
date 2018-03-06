// Teorema de pitágoras para calcular la distancia. 

// Estamos declarando un objeto de tipo constante, un objeto se declara en un bloque de código
const p1 = {
	// Atributos de mi objeto que van a contener un valor y par ello lo hacemos con ":"
	x: 0,
	y: 4,
	// También podemos agregar Métodos a los objetos, para ello agregaremos una función mover en x
	// Estas 2 Funciones que son Atributos de un objeto, las llamamos Métodos.
	moverEnX: function (x) { this.x = this.x + x}, // PARA REFERENCIARNOS AL VALOR QUE TIENE UN PARÁMETRO ocupamos This.parametro
	moverEnY: function (y) { this.y = this.y + y}
					// Parametro Y o X que puede ser modificado en la funcion moverEnX(pasandole argumentos a los puntos en X e Y).	
}
// Declaramos un objeto de tipo constante, que  se declara en un bloque de código.
const p2 = {
	// Atributos que va a recbir mi objeto
	x: 3,
	y: 0,
	moverEnX: function (x) { this.x = this.x + x},
	moverEnY: function (y) { this.y = this.y + y}
}

// Funcion distancia que contiene dos párametros en este caso son objetos (objeto1, objeto2)
function distancia(p1, p2) {
	// la funcion contiene 2 variables constantes que almacenan la diferencia de puntos para X y en Y
	const x = p1.x - p2.x;
	const y = p1.y - p2.y;
// La función nos va a retornar la operación que se obtiene de el TEOREMA DE PITAGÓRAS.
	return Math.sqrt(x * x + y * y) // Obtiene la longitud de la hipotenusa en un triangulo rectangulo
}

// Imprime en consola la función distancia que lo que hace es retornarnos la longitud de la hipotenusa
// con los valores que se pasan por párametros o argumentos de los objetos p1 y p2.
console.log(distancia(p2,p1).toFixed(2));


const nombreObjeto = { // inicia la construcción del objeto
	// Los objeros tienen atributos que apuntan a un valor
atributoA: 10, // Para denotar un atributo, se escribe el nombre del atributo, dos puntos ":" y el valor
atributoB: 20, // Para escribir varios atributos, se separan por coma ","
atributoC: 30 // El ultimo atributo no lleva comma porque al no ponerla JavaScript entiende que finaliza nuestra sentencia.

} // Cierra la construcción de un objeto
