//Viikon 3 ensimmäiset harjoitukset/Tehtävä 2/ERiko Korhonen/14.4.2021
function muutaSalasanaksi()
{
  var sana = document.getElementById('sana').value;
  var salasana = "<p>";
  for(var j = 0; j < sana.length; j++)
  {
    salasana += sana[j] + 'Ü';//'Ã–';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
