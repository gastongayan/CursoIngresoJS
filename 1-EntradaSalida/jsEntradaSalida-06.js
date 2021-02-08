/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    /*Gaston Alejandro Gayan

    Div. Ingreso Febrero 2021 "H"
    */


    //txtIdNumeroUno
    //txtIdNumeroDos
    var numeroUno;
    var numeroDos;
    var suma;
    //suma= (numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value)) +(numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value));
    numeroUno=txtIdNumeroUno.value;
    numeroDos=txtIdNumeroDos.value;
    numeroUno=parseInt (numeroUno);
    numeroDos=parseInt (numeroDos);
    suma= numeroUno+numeroDos;

    alert("La suma de los numeros ingresados es "+suma);
}