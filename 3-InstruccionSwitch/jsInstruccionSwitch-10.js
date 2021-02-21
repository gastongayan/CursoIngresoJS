function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);
	var destinoIngresado=txtIdDestino.value;
	
	/*Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/
	
	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja")
				break;
				default:
					alert("No se viaja")
				break
			}
		break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
				break;

				default:
					alert("No se viaja");
				break;
			}
		break;
		
		case "Otoño":
			alert("Se viaja");
		break;

		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
				break;

				default:
					alert("Se viaja");
				break;
			}
		break;

	}

}//FIN DE LA FUNCIÓN