/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

   /*Gaston Alejandro Gayan

    Div. Ingreso Febrero 2021 "H"
    */
	//txtIdNumeroDividendo
	//txtIdNumeroDivisor
	var resultado;
	var dividendo;
	var divisor;
    dividendo=parseInt(txtIdNumeroDividendo.value);
	divisor=parseInt(txtIdNumeroDivisor.value);
	resultado= dividendo%divisor;
	alert("El resto es "+resultado);
}
