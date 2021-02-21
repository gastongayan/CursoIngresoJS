function mostrar()
{
	
	/*Ejercicio 06
	Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/
	var Edad;
	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if (Edad>=18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if ((Edad>=13)&&(Edad<=17))
		{
			alert("Usted es adolecente");
		}
		else
		{
			alert("Usted es menor de edad");
		}

	}


}//FIN DE LA FUNCIÓN