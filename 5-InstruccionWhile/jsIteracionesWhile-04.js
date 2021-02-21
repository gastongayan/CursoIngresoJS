/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
//Gaston A. GAYAN
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt (numeroIngresado);

	while ((numeroIngresado < 0) || (numeroIngresado > 10))
	{
		numeroIngresado = prompt("El numero ingresado es incorrecto, ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt (numeroIngresado);
	}
	
	txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN