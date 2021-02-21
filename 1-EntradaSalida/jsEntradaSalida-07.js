/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
  
   /*Gaston Alejandro Gayan

    Div. Ingreso Febrero 2021 "H"
    */
function sumar()
{	
	var numeroUno;
    var numeroDos;
    var suma;
    numeroUno=parseInt(txtIdNumeroUno.value);
    numeroDos=parseInt(txtIdNumeroDos.value);
    suma= numeroUno+numeroDos;

    alert("La suma de los numeros ingresados es "+suma);
}

function restar()
{
	var numeroUno;
    var numeroDos;
    var resta;
    numeroUno=parseInt(txtIdNumeroUno.value);
    numeroDos=parseInt(txtIdNumeroDos.value);
    resta= numeroUno-numeroDos;

    alert("La resta de los numeros ingresados es "+resta);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var multiplica;
    numeroUno=parseInt(txtIdNumeroUno.value);
    numeroDos=parseInt(txtIdNumeroDos.value);
    multiplica= numeroUno*numeroDos;

    alert("La multiplicacion de los numeros ingresados es "+multiplica);
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var dividir1;
    numeroUno=parseInt(txtIdNumeroUno.value);
    numeroDos=parseInt(txtIdNumeroDos.value);
    dividir1= numeroUno/numeroDos;
	dividir1=dividir1.toFixed(2);
    alert("La division de los numeros ingresados es "+dividir1);
}

