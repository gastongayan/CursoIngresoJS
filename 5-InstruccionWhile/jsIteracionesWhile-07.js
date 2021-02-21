/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Gaston A. GAYAN

//https://onlinegdb.com/HyIB4cnW_
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta="si";
	while (respuesta=="si")
	{
		numeroIngresado = prompt ("Ingrese numero");
		numeroIngresado = parseInt (numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador ++;
		respuesta = prompt ("Desea continuar? si  no");
		
		while ((respuesta !="si") && (respuesta != "no"))
		{
			if ((respuesta !="si") && (respuesta != "no"))
			{	
				respuesta = prompt ("Datos incorrectos, ingrese si o no");
			}
		}
		
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN