/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*Gaston Alejandro Gayan

    Div. Ingreso Febrero 2021 "H"
    */
    //txtIdImporte
    //txtIdResultado

    var importe;
    var resultado;
    importe=parseInt(txtIdImporte.value);
    resultado=importe*0.75;
    txtIdResultado.value=resultado;
  
}
