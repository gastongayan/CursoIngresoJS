function mostrar()
{
	/*Ejercicio 07
	Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/

	var Edad;
	var EstadoCivil;
	
	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);
	EstadoCivil = estadoCivil.value;
	
	if ((Edad<18)&&(EstadoCivil!="Soltero"))
	{
		alert("Usted es muy pequeño para NO ser soltero");
	}

	

}//FIN DE LA FUNCIÓN