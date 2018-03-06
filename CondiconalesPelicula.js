//Uso de los condicionales IF para saber si una persona puede o No pasar a ver una Pelicula
//Definimos una varibale const para guardar un string que va a tener el nombre de la película.
const starWars7 = 'Star Wars: El despertar de la fuerza';
//Definimos una variable Const para guardar la Edad minima para pasar a ver la pelicula
const pgStarwars7 = 13;

//Constante que va a tener el nombre de una persona, en este caso Sabemos el nombre de la persona 
//por ello lo definimos como una constante porque ese valor no va a cambiar
const nameSacha = 'Sacha';
/*variable que va a contener la edad de la persona que que definimos en la parte de arriba,
la declaramos como una constante porque no va cambiar el valor de su edad en el programa */
const ageSacha = 26;

/*Constante que va a guardar el nombre de una segunda persona, en este caso sabemos el nombre de
la persona y asumimos que no va cambiar en todo el programa*/
const nameSanti = 'Santi';
/*Constante que va guardar la edad de la segunda persona*/
const ageSanti = 12;
/*Función de nombre canWatchStarWars7(puedeMirarStarWars7), esta funcion va a contener 3 parametros
el primero es el nombre, la edad y si estaAcompañadoConUnAdulto.*/
function canWatchStarWars7(name, age, isWithAdult){
	//Si la edad es mayor o igual que pgStarwars7:13
	if (age >= pgStarwars7) { //Entonces ejecuta este bloque de código
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else if (isWithAdult){ //Entonces Si, ¿esta acompañado por un adulto? ejecuta esto si es True.
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${ageSanti}, Se encuentra acompañado/a por un Adulto.`);
	} else { //Si no, se cumplieron las condiciones anteriores ejecuta esto.
		alert (`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarwars7}`);
	}
}
/*Llamamos a la función con las constantes que definimos arriba de.
Pasamos como parametros la informacion de la primera persona*/
canWatchStarWars7(nameSacha, ageSacha, false); 
//Pasamos como párametros la información de la segunda persona.
canWatchStarWars7(nameSanti, ageSanti, true);


//CAMBIANDO LA FUNCIÓN A FUNCIÓN ARROW FUNCTION

let canWatchStarWars7 = (name, age, isWithAdult) => {
	//Si la edad es mayor o igual que pgStarwars7:13
	if (age >= pgStarwars7) { //Entonces ejecuta este bloque de código
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else if (isWithAdult){ //Entonces Si, ¿esta acompañado por un adulto? ejecuta esto si es True.
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${ageSanti}, Se encuentra acompañado/a por un Adulto.`);
	} else { //Si no, se cumplieron las condiciones anteriores ejecuta esto.
		alert (`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarwars7}`);
	}
}

