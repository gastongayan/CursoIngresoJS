/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var Contador;
	var Numero;
	var Resultado;
	Contador = 0;
	Resultado = 0;
	while (Contador < 10)
	{
 		Numero = prompt ("Ingrese un numero");
 		Numero = parseInt(Numero);
  		Resultado = Resultado + Numero;
  		Contador++;
	}
	alert("El resultado de la suma de los numeros es: "+ Resultado);
}//FIN DE LA FUNCIÓN