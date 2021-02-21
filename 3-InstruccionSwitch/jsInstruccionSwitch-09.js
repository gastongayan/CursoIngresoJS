function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino=txtIdDestino.value;
	var costoTotal;

	/*Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/
	
	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					costoTotal=15000*1.2;
				break;
				case "Cataratas":
				case "Cordoba":
					costoTotal=15000*0.9;
				break;
				case "Mar del plata":
					costoTotal=15000*0.8;
			}
		break;
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					costoTotal=15000*0.8
				break;
				case "Cataratas":
				case "Cordoba":
					costoTotal=15000*1.1;
				break;
				case "Mar del plata":
					costoTotal=15000*1.2;
				break;
			}
		break;
		case "Primavera":
		case "Otoño":
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					costoTotal=15000*1.1;
				break;
				case "Cordoba":
					costoTotal=15000;
				break;
			}
		break;

	}

	alert("El costo de la estadia es $ "+costoTotal+ " pesos");

}//FIN DE LA FUNCIÓN