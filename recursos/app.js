//se inicializa la variable
var numero = prompt("Dijite un número entero");

function parImpar(numero) {
	if(numero % 2 == 0) {
		alert("Numero PAR");
	}else{
		alert("Numero IMPAR");
	}
}
parImpar(numero);