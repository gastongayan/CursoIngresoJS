function mostrar()
{
	//tomo la hora
	/*Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("El destino se encuentra al Oeste");
		break;

		case "Mar del plata":
			alert("El destino se encuentra al Este");
		break;

		case "Cataratas":
			alert("El destino se encuentra al Norte");
		break;

		case "Ushuaia":
			alert("El destino se encuenta al Sur")
	}
	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN