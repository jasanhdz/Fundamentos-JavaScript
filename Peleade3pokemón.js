// Juego donde pelearán 3 pokemos, siempre atacara el pokemón con el golpe de mayor daño.

// Declaramos la vida de los 3 pokemon
let vidaCharizar = 100;
let vidaPikachu = 100;
let vidaGengar = 100;

// Poder Minimo y poder Máximo.
MIN_POWER = 5;
MAX_POWER = 12;

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

const SiguenVivos = () => vidaCharizar > 0 && vidaPikachu > 0 && vidaGengar > 0;

const CharizarSigueVivo = () => vidaCharizar > 0;
const PikachuSiguevivo = () => vidaPikachu > 0;

let round = 0;

while (SiguenVivos()) {
	round++
	console.log(`Round ${round}`);

	const golpeCharizar = calcularGolpe();
	const golpePikachu = calcularGolpe();
	const golpeGengar = calcularGolpe();

// Definamos quién ataca
if (golpePikachu > golpeCharizar && golpePikachu > golpeGengar){
	console.log(`Ataca Pikachu su golpe es de ${golpePikachu}`);

	vidaCharizar -= golpePikachu;
	vidaGengar -= golpePikachu;
	console.log(`La vida de Charizar es de ${vidaCharizar} puntos`);
	console.log(`La vida de Gengar es de ${vidaGengar} puntos`);

} else if (golpeCharizar > golpeGengar && golpeCharizar > golpePikachu) {
	console.log(`Ataca Charizar su golpe es de ${golpeCharizar}`)
	
	vidaGengar -= golpeCharizar;
	vidaPikachu -= golpeCharizar;
	console.log(`La vida de Gengar es de ${vidaGengar} puntos`);
	console.log(`La vida de Pikachu  es de ${vidaPikachu} puntos`);

} else {
	console.log(`Ataca Gengar su golpe es de ${golpeGengar} puntos`);

	vidaPikachu -= golpeGengar;
	vidaCharizar -= golpeGengar;
	console.log(`La vida de Pikachu es de ${vidaPikachu} puntos`);
	console.log(`La vida de Charizar es de ${vidaCharizar} puntos`);
	
	}
}
 // Comprobemos quien es el ganador de nuestra batalla 
 if (CharizarSigueVivo()) {
 	console.log(`Charizar ganó la pelea su vida es de ${vidaCharizar}`);
 } else if (PikachuSiguevivo()) {
 	console.log(` Pikachu ganó la pelea se vida es de ${vidaPikachu}`);
 } else {
 	console.log(`Gengar ganó la pelea su vida es de ${vidaGengar}`);
 }







