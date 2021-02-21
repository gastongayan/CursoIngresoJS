/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//Gaston A. Gayan
	var contador;
	var claveIngresada;
	claveIngresada = prompt("Ingrese la clave para ingresar");
	contador = 0;

	while ((claveIngresada != "utn750") && (contador != 2))
	{
		claveIngresada = prompt("Clave incorrecta, ingrese nuevamente");
		contador ++;
	}
	if (contador == 2)
	{
		alert ("Usted fue bloqueado");	
	}
	else
		{
			alert ("Usted ingreso correctamente");
		}

}//FIN DE LA FUNCIÓN
