// Los clousure son funciones que recuerdan el entorno en el cual fuerón creadas, esto quiere decir que al
// llamar una función van a recordar las varibales que tenian en ese momento. Por ejemplo, si queremos
// hacer una función para saludar determinada familia

function saludarGomez(nombre) {
	console.log(`Hola ${nombre} Gomez`)
}

function saludarPerez(nombre) {
	console.log(`Hola ${nombre} Pérez`);
}

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Monica.") 

saludarPerez("Julieta")
saludarPerez("Rodrigo")
saludarPerez("Benjamin")
saludarPerez("Roberta")

function saludarFamilia(apellido) {
	return function SaludarMiembrodeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez");
const saludarPerez = saludarFamilia("Pérez");

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Monica.") 

saludarPerez("Julieta")
saludarPerez("Rodrigo")
saludarPerez("Benjamin")
saludarPerez("Roberta")