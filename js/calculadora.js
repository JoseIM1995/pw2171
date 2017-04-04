//Variable global (se puede usar en cualquier método)
var operador = "";

function borrar(){
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}

function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor1 = document.calculadora.operando1.value;
	if(operador == "+"){
		document.calculadora.resultado.value = eval(valor1+operador+valor2);
	}
}

function operadores(ope){
	operador = ope;
}

function numeros(num){
	if(operador == ""){ //Escribir en el operando1
		var valorInicial = document.calculadora.operando1.value;
		if(valorInicial == "0"){//Elimino el cero
			document.calculadora.operando1.value = "";
		}
		//Concatena los valores de num con los del operando1
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	} else{
		if(operador == ""){ //Escribir en el operando2
		var valorInicial = document.calculadora.operando2.value;
		if(valorInicial == "0"){//Elimino el cero
			document.calculadora.operando2.value = "";
		}
		//Concatena los valores de num con los del operando2
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	}
}
}