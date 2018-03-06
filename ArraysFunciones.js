// Funcion para calcular la suma de muchos párametros
function suma (n1 , n2, n3, n4, n5) {
	return n1 + n2 + n2 + n4 + n5 + n6
}

suma(4, 8, 12, 8954, 7, 9)

// Manera de sumar n elementos de un arreglo.
function suma(...sumandos) {
	let acum = 0
	for (let i = 0; i < sumandos.length; i++){
		acum +=  numeros[i]
	}

}
suma(4, 8, 12, 8954, 7, 9)

// Manera mas limpia de sumar los elementos de un arreglo, usando el método Reduce
function suma(...numeros) {
	return numeros.reduce(function (acum, numero) {
		acum += numero
		return acum
	}, 0)
}
suma(4, 8, 12, 8954, 7, 9)}

// Escibimos una función que nos devuelva el doble del arreglo usando un tipico for.
function dobles(...numeros) {
	const resultado = []
	for (let i = 0; i < numeros.length; i++) {
		resultado.push(numeros[i] * 2)
	}
	return resultado
}

// Escribimos una función que nos devuelva el doble del arreglo usando la función
// de los arreglos map.
function dobles(...numeros) {
	return numeros.map(function (numero) {
		return numero * 2
	})
}

// Reduciendo las lineas de código de la función anterior seria:
const dobles = (...numeros) => return numeros.map(numero => numero * 2 )

