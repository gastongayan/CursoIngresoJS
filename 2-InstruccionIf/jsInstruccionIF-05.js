function mostrar()
{
	/*Ejercicio 06
	Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021
	*/
	var Edad;
	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);
	/*if (Edad<=13)
	{
		if(Edad>=17)
			alert("Usted no es adolecente");
	}*/
	if ((Edad<13)||(Edad>17))
	{
		alert("Usted no es adolecente");
	}
	//alert("ok");


}//FIN DE LA FUNCIÓN