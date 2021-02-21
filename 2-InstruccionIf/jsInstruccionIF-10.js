function mostrar()
{
	
	/*Ejercicio 10
	Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/
	
	var Aleatorio;
	Aleatorio = Math.floor(Math.random() * 11);	//Genero el número RANDOM entre 1 y 10 
	
	if (Aleatorio < 4)
	{
		alert("Vamos, la proxima se puede "+Aleatorio);
	}
	else
	{
		if (Aleatorio >= 9)
		{
			alert("EXCELENTE "+Aleatorio);
		}
		else
		{
			alert("APROBO "+Aleatorio);
		}
	}
	

}//FIN DE LA FUNCIÓN