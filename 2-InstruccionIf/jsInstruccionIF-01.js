/* Al ingresar una edad que sea igaul a 15,
mostrar el mensaje "niña bonita"*/

function mostrar()
{
var Edad;
var Resultado;
Edad = txtIdEdad.value;
Edad = parseInt(Edad);
Resultado=Edad==15;
alert (Resultado);
if (Resultado)
	{
		alert("Niña bonita");
	}
	console.log(Edad);
}//FIN DE LA FUNCIÓN