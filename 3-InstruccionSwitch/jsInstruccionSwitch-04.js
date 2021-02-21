function mostrar()
{
	
	/*Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/

	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño)
    {
        case "Febrero":
            alert ("Este mes tiene 28 dias.");
        break;

        case "Abril":
        case "Junio":
        case "Agosto":
        case "Septiembre":
        case "Diciembre":

            alert ("Este mes tiene 30 dias.")
        break;

        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Octubre":
        case "Noviembre":

            alert ("Este mes tiene 31 dias.");
            break;
    }

}//FIN DE LA FUNCIÓN