// Juego de pelea entre Goku y Superman ¿Quien ganará? 
//Para ello usamos un Math.Random para calcular aleatoriamente los golpes entre ellos
// También ocupamos un Math.round para redondear la multiplicación de random.

// Declaramos en variables la vida de cada jugador Goku y Superman.
let vidaGoku = 100;
let vidaSuperman = 100;

// Declaramos los golpes máximos y minimos de los jugadores
const MIN_POWER = 5;
const MAX_POWER = 12;

// <*--- FUNCIONES ---*>
// Esta función Comprueba si Los dos jugadores siguen vivos, retornando la comparación
// de que amnbos efectivamente sigan vivos.
const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;
// Esta funcion ocupa un random para aleatoriar los golpes y los rendodea a entero con round.
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
// Está Función comprueba si Goku sigue vivo, para saber si gano el, sino entonces ganos Superman con un if
const gokuSigueVivo = () => vidaGoku > 0;

// Variable que almacena el número de round
let round = 0;

// Mientras la función ambos siguen siguen vivos sea true ejecuta el ciclo
while (ambosSiguenVivos()) {
	round++ // incrementa a round en uno hasta no cumplir la condición de que ambosSiguenVivos
	console.log(`Round ${round}`); // imprime el número de round.

	// Golpe goku es igual a la función que retorna un numero aletario
	const golpeGoku = calcularGolpe(); 
	// Golpe Superman es igual a la función que retorna un número aleatorio.
	const goleSuperman = calcularGolpe();

	// Si el golpe de Goku es mayor que el de Superman, entonces ataca Goku
	if (golpeGoku > goleSuperman) {
		//Ataca Goku
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
		// La vida de superman es igual a la vida de superman menos el golpe de goku
		vidaSuperman -= golpeGoku;
		console.log(`Superman queda en ${vidaSuperman} de vida`);	
	} 
	// Si no entonces ataca superman porque su golpe es mayor.
	else {
		//Ataca superman
		console.log(`Superman ataca a Goku con un golpe de ${goleSuperman}`)
		// La vida de Goku es igual a la vida de que Goku tenía menos el golpe de Superman.
		vidaGoku -= goleSuperman;
		console.log(`Goku queda en ${vidaGoku} de vida`);
	}
} 

// Si Goku sigue Vivo = true entonces Ganó goku
if (gokuSigueVivo()) {
	console.log (`Goku ganó la pelea. Su vida es de: ${vidaGoku}`);
} 
// Si no entonces ganó Superman
else {
	console.log(`Superman ganó la pelea. Su vida es de ${vidaSuperman}`);
}
