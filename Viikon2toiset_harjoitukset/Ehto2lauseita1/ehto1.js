//Viikon2toiset harjoitukset/Ehto2lauseita 1/Eriko Korhonen/30.3.2021
function positiivinenNegatiivinen()
 {
   var arvo;
   arvo = parseInt(document.getElementById('luku').value);
   document.write("Antamasi luku: " + arvo);
   if(arvo >= 0)
   {
     document.write("<br><br>Antamasi luku on positiivinen");
   }
   else
   {
     document.write("<br><br>Antamasi luku on negatiivinen");
   }
 }
//jos luku on 0...
