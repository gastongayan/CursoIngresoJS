/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
//Gaston A. GAYAN
//https://onlinegdb.com/ryNh4qnbu
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f para femenino ó m para masculino");

	while ((sexoIngresado != "m")&&(sexoIngresado != "f"))
	{
		sexoIngresado = prompt("valor ingresado incorrecto, ingrese 'f' para femenino ó 'm' para masculino .");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN