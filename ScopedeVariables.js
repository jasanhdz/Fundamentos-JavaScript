// El Scope es el conjunto de variables y funciones que podemos llamar en una parte del codigo
// si definimos una variable en el scope global(window en el navegador) podemos acceder a ella
// dentro de cualquier lugar del código.
// Si definimos una variable dentro de una función solo lo podemos utilzar dentro de esa 
// función si lo declaramos con var, si lo declaramos con let solo podemos acceder a ella 
// en el blóque de código.

var nombre = "Jasan"

function saludar() {
	console.log(`Hola ${nombre}`)
}
saludar()
console.log(`La variable nombre tiene el valor ${nombre}`)

// Veremos que pasa si recibimos por parametro una varible con el mismo nombre

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
saludar("Erick") // lo que va a ejecutar es Hola Erick por que toma la variable local

// Si redefinimos la variable nombre dentro de la funcion que vamos a retornar, Obviamente
// va a retornar el valor de la variable local 
function saludar(nombre) {
	nombre = "Pablo" // Estamos cambiando o redefiniendo el valor de la variable local.
	console.log(`Hola ${nombre}`);
}

saludar() // Hace un llamado a la función que ejecuta "Hola Pablo"
console.log(`por fuera de la función la variable nombre contiene a ${nombre}`)
// por fuera de la función el console va a imprimir el valor de la variable local que 
// ya no será el mismo porque la variable nombre se Redefinio en la función.

var nombre = "Jasan"

function saludar(nombre) {
	// var nombre = "Erick" JS lo interpreta como si hubieras declarado a la misma alura
	// y hubieramos redefinido dentro de la función.
	if (true) {
		var nombre = "Erick" // Cada vez que definimos varibales con la palabra var,
// JS lo interpreta como si nosotros hubieramos declarado la variable a la misma altura de la función. 
	}
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`El valor de la variable nombre es: ${nombre}`)

function saludar10 () {
// lo que vamos es que JS si ejecuta el valor de i, lo cual no debe de hacer porque, la variable
// i solo debe estar presente en el bloque de codigo local, no debe de salirse de ahi.
	for(var i = 0; i < 10; i++) {
		console.log(`Hola mi nombre es: ${nombre}`)
	}
// Es por ello que si no queremos contaminar el scope global, no demos declarar variables
// con var, porque de este modo nuestras variables locales pueden perjudicar nuestro codigo en 
// otras lineas de codigo ajenas donde no deberían existir.
// IMPORTANTE; Ya no declares variables con var, solo con let o si puedes mejor con Const.
	console.log(`El valor de i es ${i}`)
}
saludar10()

//<---- Manera correcta de declarar las variables con Let para no contaminar el SCOPE. ---->
function saludar10 () {

for(let i = 0; i < 10; i++) {
		console.log(`Hola mi nombre es: ${nombre}`)
	}
console.log(`El valor de i es ${i}`)
}
saludar10()