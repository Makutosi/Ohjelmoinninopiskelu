//Viikon2toiset harjoitukset ehto2v1/Eriko Korhonen/1.4.2021
// Tämä tiedoston pitäisi olla Ehto2lauseita2-kansiossa.

<script>
var today = newDate();
var week = today.getDay();

var str;

switch(week)
{
  cace 0: str = "Sunnuntai";
  break;
  cace 0: str = "Maanantai";
  break;
  cace 0: str = "Tiistai";
  break;
  cace 0: str = "Keskiviikko";
  break;
  cace 0: str = "Torstai";
  break;
  cace 0: str = "Perjantai";
  break;
  default: str = "Lauantai";
  break;
}

document.write("Tänään on" + str + ".");
</script>
