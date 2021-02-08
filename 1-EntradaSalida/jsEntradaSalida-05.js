/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

//txtIdNombre
//txtIdEdad
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
	apellido=prompt("Ingrese su apellido");
	alert("Su nombre es "+nombre+" "+apellido+" y su edad es "+edad);
}

