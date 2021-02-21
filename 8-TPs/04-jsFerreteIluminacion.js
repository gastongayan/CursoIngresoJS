/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*TP N° 4 
	Gaston Alejandro Gayan
	Div. TT Ingreso Feb 2021*/

 	var valorLampara;
 	var cantidad;
 	var total;
 	var marca;
 	var valorIIBB;
 	valorLampara = 35;
 	cantidad = txtIdCantidad.value;
 	cantidad = parseInt (cantidad);
 	marca = Marca.value;
 	total = cantidad * valorLampara;
 	var positivo;
 	positivo = cantidad > 5;
 	switch (positivo)
 		{
 			case true:
 				total = total *0.5;
 			break;
 			case false:
 			switch (cantidad)
 			{
 				case 5:
 				switch (marca)
 				{
 					case "ArgentinaLuz":
 						total = total *0.6;
 					break;
 					default:
 						total = total * 0.7;
 				}
 			break;
 			case 4:
 				switch (marca)
 				{
 					case "ArgentinaLuz":
 					case "FelipeLamparas"
 						total = total *0.75;
 					break;
 					default:
 						total = total * 0.8;
 				}
 			break;
 			case 3:
 				switch (marca)
 				{
 					case "ArgentinaLuz":
 						total = total *0.85;
 					break;
 					case "FelipeLamparas"
 						total = total * 0.9;
 			case 2:
 				switch (marca)
 				{
 					case "ArgentinaLuz":
 					case "FelipeLamparas"
 						total = total *0.75;
 					break;
 					default:
 						total = total * 0.8;
 				}
 			break;
 		}	
 			break;
 		} 	
 	
 	}

 	/*if (cantidad > 5)
 	{
 		
 		total = total * 0.5;
 	}
 	else
 	{
 		if (cantidad==5)
 			{
 				if (marca=="ArgentinaLuz")
 				{
 					total = total * 0.6;
 				}
 				else
 				{
 				total = total * 0.7;
 				}
 			}
 			
	 		if (cantidad==4) 
 			{
 				if ((marca=="ArgentinaLuz")||(marca=="FelipeLamparas"))
 				{
 					total = total * 0.75;
 				}
 			}
 			else
 			{
 				total = total * 0.8;
 			}
 		if (cantidad==3) 
 		{
 			if (marca=="ArgentinaLuz")
 				{
 					total = total * 0.85;
 				}
 			else
 			{
 				if(marca=="FelipeLamparas")
 				{
 					total = total * 0.9;
 				}
 				else
 				{
 					total = total * 0.95;
 				}
 			}
 		}
 	}
 	*/if (total > 120)
 	{
 		valorIIBB = total * 0.1;
 		total = total + valorIIBB;
 		txtIdprecioDescuento.value=total;
 		alert("Usted pago "+valorIIBB+" de IIBB")
 		
 	}
 	else
 	{
 		txtIdprecioDescuento.value=total;
 	}
 	txtIdprecioDescuento.value=total;


}
