var total = [0, 1, 2, 3].reduce(function(a, b){return a + b;});


// Lo que hace nuestro Reduce es integrar los elementos da cada matriz y juntarlos en
// una nueva matriz, recibe una funcion de dos parametros, retorna a.concatenar(b) 
var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
	return a.concat(b);
});
