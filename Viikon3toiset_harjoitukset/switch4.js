//Viikon 3 toiset harjoitukset/Tehtävä 4/ Eriko Korhonen/1.5.2021

function arvoKortit()
{
   var tulosta = "";
   var z = 0;
   var merkki = "";
   var y = 0;

   for(var x = 1; x <= 5; x++)
   {
      z = Math.floor(Math.random() * 4 + 1);
      y = Math.floor(Math.random() * 13 + 1);
      switch (z)
      {
        case 1:
          merkki = "&#9825;";
          break;
        case 2:
          merkki = "&#9826;";
          break;
        case 3:
          merkki = "&#9827;";
          break;
        case 4:
          merkki = "&#9828;";
          break;
          default:
       }
    tulosta += merkki + y + ",";
    }
   document.write(tulosta);
 }
