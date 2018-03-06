/* Closures: Son funciones que recuerdan el scope - entorno en donde fueron creadas.
Lo cual permite que los closures o funciones internas tengas acceso a las variables de la función
externa, dado que están en el mismo scope. Ejemplo */

function creaSumador(x) {
	return function(y) {
		return x + y;
	};
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2)); // muestra 7
console.log(suma10(2)); // muestra 12

/* La función anónima interna, crea una única variable y, que es recibida
como párametro. Sin embargo dado que es un closure y esta en el escope
de la función creaSumador, tiene acceso a x lo cual le permirte
devolvernos la suma x + y.