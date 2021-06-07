//Viikon 3 ensimmäiset harjoitukset/ Tehtävä 2/Eriko Korhonen/4.6.2021
function uusiSalasana()
{
  var sana = document.getElementById('sana').value;
  var salasana = "<p>";
  for(var i = 0; i < sana.length; i++)
  {
    salasana += sana[i] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
