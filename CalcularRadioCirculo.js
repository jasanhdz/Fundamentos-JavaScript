//Ahora vamos a calcular el Área de un circulo
//Para ello vamos a ocupar la formula de Pi*Radio

const Pi = 3.1416;
let Radio = 5;

function AreaCirculo (Pi, Radio){
	return Pi * Radio * Radio	
};

console.log(`El área de un circulo de Radio ${Radio} es: ${AreaCirculo(Pi, Radio)}`);

//Ahora declaremos una Variable a la Funcion usando los ARROW-FUNCTION.
const AreaCirculo = (Pi, Radio) => {Pi * Radio * Radio};

console.log(`El área de un circulo de Radio ${Radio} es: ${AreaCirculo}`);
alert(`El áera de un circulo de Radio ${Radio} es: ${AreaCirculo}`);

//Usando Math
let radio = 5;
let circleArea = (radio) => {return Math.PI * (radio * radio)};
console.log(`El área de un circulo de Radio ${radio} es: ${circleArea}`);