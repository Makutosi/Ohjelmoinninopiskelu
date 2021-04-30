//Viikon 2 ensimmäiset harjoitukset/Tehtävä1/Eriko Korhonen/4.4.2021
function arrange()
{
 var x, y, z;
 x = parseInt(document.getElementById('num1').value);
 y = parseInt(document.getElementById('num2').value);
 z = parseInt(document.getElementById('num3').value);
 document.write("Antamasi numerot ovat  " + x + ', ' + y + ', ' + z + "<br><br>");
 if(x < y && y < y)
 {
   if(y < z)
   {
     document.write("Numerot järjestyksessä: " + x + ', ' + y + ', ' + z);
   }
   else
   {
     document.write("Numerot järjestyksessä: " + x + ', ' + z + ', ' + y);
   }
 }
 else if(y < x && y < z)
 {
   if(x<z)
   {
     document.write("Numerot järjestyksessä: " + y + ', ' + x + ', ' + z);
   }
   else
   {
     document.write("Numerot järjestyksessä: " + y + ', ' + z + ', ' + x);

   }
 }
 else if(z < x && z < y)
   {
     if(x < y)
     {
       document.write("Numerot järjestyksessä: " + z + ', ' + x + ', ' + y);
     }
     else
     {
       document.write("Numerot järjestyksessä: " + z + ', ' + y + ', ' + x);

     }
   }
 }

 //parseInt( 'teksti');  muuttaa tekstin kokonaisluvuksi(integer)
 //useampi if-else  if->else if(eka ehto on epä tosi)->else
 //&& ja
 //document.write("teksti"); kirjoittaa tekstiä suoraan HTML-asiakirjaan
