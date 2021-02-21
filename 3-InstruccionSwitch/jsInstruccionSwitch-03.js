function mostrar()
{
	//tomo el mes
	/*Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	
	switch (mesDelAño)
	{
		case "Febrero":
			alert ("Este mes no tiene mas de 29 días");
		break;
		
		default:
			alert ("Este mes tiene 30 dias o mas");
		break; 
	}


}//FIN DE LA FUNCIÓN