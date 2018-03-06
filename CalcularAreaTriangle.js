//En JavaScript podemos ocupar comillas dobles para declarar un string, 
//Pero para ello debemos concatenar las variables.
console.log("El área de un triangulo y de base 5 y altura 7 es:" + 5 * 7 / 2);
//También podemos ocupar comillas simples y de igual manera debemos concatenar las variables
console.log('El área de un triangulo de base 5 y altura 7 es:' + 5 * 7 / 2);
//Otra opción nueva que surgió con las mejoras de JavaScript es ocupar comilla INVERTIDA,
//Ocupando ahora la variable ${BLOQUE} podemos declara bloques donde pondremos nuestras variables.
console.log(`El área de un triangulo de base 5 y altura 7 es: ${5 * 7 / 2}`);

//También Podemos guardar los valores en variables, hasta el momento solo hemos usado LET, VAR Y CONST

let base = 5; // Valor de la base
let height = 7; // Valor de la altura

console.log(`El área de un triangulo de base ${base} y altura ${height} es: ${base * height / 2}`);

//Ahora llevemos nuestra operación a una FUNCIÓN la cau nos va a ayudar a CALCULAR 
//Tamaño del triagulo para cualquier valor, FUNCION-CALCULAR-ÁREA-TRAINGULO-GENERAL.

let base = 5; // Valor de la base
let height = 7; // Valor de la altura

//Está función va a recibir dos Parametros en este caso, va a hacer BASE Y HEIGHT
function TriagleArea(base, height){
	return base * height / 2; //La función nos va a retornoar la OPERACIÓN del Triangulo.
}
//Ahora nuestro console.log va a tener en un bloque nuestra función TriangleArea con dos párametros
// Base y Height 
console.log(`El área de un triangulo de base ${base} y altura ${height} es: ${TriagleArea(base, height)}`);

//TAMBIÉN PODEMOS DECLARAR ARROW FUNCTION (FUNCIONES FLECHA)
//Esto quiere decir que a una VARIABLE Nosotros le podemos asignar una Función.
let TriagleArea = function (base, height){
	return base * height / 2 }
//También Podemos ahorrarnos la palabra Function, pero tenemos que agregar una Flecha 
//Despues de los parentesis.
								//Si solo vamos escribir el return conviene escribirlo en 1 linea.
let TriagleArea = (base, height) => { return base * height / 2; } 
//INCLUSO podemos No poder la palabra return ya que JavaScript lo entiende sólo cuando se trata de ARROW-FUNCTION.
let TriagleArea = (base, height) => {base * height / 2}; 

//Cuando se trata de una variable que contiene una variable que no va a cambiar también podemos definirla con CONST
//significa que la variable no va a cambiar.

console.log(`El área de un triangulo de base ${base} y altura ${height} es: ${TriagleArea}`);