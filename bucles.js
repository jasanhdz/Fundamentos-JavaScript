//Programa que nos muestra de inicio un array que contiene los dias de la semana,
//También nos muestra el numero de kilometros que corre una persona aleatoriamente

//constante que guarda el nombre de una persona
const nombre = 'Jasan'
// Constante que guarda en un Array los días de la semana.
const dias = ["lunes", "martes", "miercoles", "jueves",
"viernes", "sábado", "domingo"];

//Función de nombre correr que retorna un valor aleatorio
function correr() {
	const min = 5; // Constante que guarda el numero minimo de kms que corre una persona
	const max = 15; // constante que guarda el número Máximo de kms que corre una persona
	// La función retorna una función Math.round que nos permite redondear hacia abajo o hacia arriba dependiendo del valor cercano hacia el entero próximo
	// Depues recibe una función que Math.random que nos genera numeros aleatorios entre 0 y 1
	// La función retorna un valor aletorio entre cero y 1 que multiplica a 10 ese valor es un float
	// El cual es redondeado hacia un valor entero minimo y luego es sumado con el valor min.
	return Math.round(Math.random() * (max-min)) + min;
}
//Declaramos un variable de nombre totalkms que va a ir almacenando el total de Kilometros.
let totalKms = 0;
// iniciamos el contador de i igual a cero, 
//condicion(mientras i sea menor que longitud de dias) incrementa a i en 1
const length = dias.length;
for (let i = 0; i < length; i++) {
	// declaramos una constante kilometros que va a guardar la función que retorna los kms aleatorios
	const kms = correr();
	// La variable que almacena los kilometros que se corrieron en la semana.
	totalKms += kms;
	console.log(`El dia ${dias[i]} ${nombre} corrió ${kms} kms`);
}
const promedioKms = totalKms / length;
console.log(`En está semana ${nombre} corrió ${totalKms} kilometros`);
console.log(`En promedio ${nombre} corrió ${promedioKms.toFixed(2)} kilometros`);