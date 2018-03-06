// Los arrays son una forma de guardar nuestros datos muy importante en JavaScript, 
// en este vídeo veremos como trabajar con Arrays.

// LA FUNCIÓN RECIBE UN NUMERO VARIBALE DE PARAMETROS (...VARIABLE)
function suma(...params) {
	return params.reduce((acumulativo, actual) => acumulativo + actual, 0)
}
// De esta forma utilizamos el método reduce con el cual cuentan los arrays, este 
// nos permite ir iterando por todo el array y acumulando el valor en una variable.

suma(4,5,6,23,26,7,8)

// Ahora queremos ejecutar una operación sobre todos los elementos del array, para esto
// tenemos un Método llamado map.

// Map recibe una funcion que se va a ejecutar por cada uno de los elementos, recibe una funcion
// con un numero y lo que va a retornar es que queremos hacer con ese número. numero * 2
// LA FUNCIÓN RECIBE UN NUMERO VARIBALE DE PARAMETROS (...VARIABLE)
function doble(...params) {
	// Tenemos que retornar porque no estamos modificando el array sino creando uno nuevo.
	return params.map(x => x * 2)
}

doble(2,3,4,5,6,7,5)

// si queremos filtrar ciertos valores de un array, tenemos otro método para poder 
// hacer esto con keyword

// LA FUNCIÓN RECIBE UN NUMERO VARIBALE DE PARAMETROS (...VARIABLE).
const pares = (...numeros) => numeros.filter(x=> x % 2 == 0)

/* Notas nomenclatura:
El parametro (...parametro) se llama Sprite-operator, y funciona para desarmar un arreglo
de números variables.

