/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (pareInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 
   /*Gaston Alejandro Gayan

    Div. Ingreso Febrero 2021 "H"
    */
    //txtIdSueldo

    var importe;
    var resultado;
    importe=parseInt(txtIdSueldo.value);
    resultado=importe*1.1;
    txtIdResultado.value=resultado;
  
}
