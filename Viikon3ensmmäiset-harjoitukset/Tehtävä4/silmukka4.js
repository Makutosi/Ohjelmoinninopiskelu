//Viikon 3 ensimmäiset harjoitukset/Tehtävä 4/Eriko Korhonen/4.4.2021
function laskeKertoma()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
  for(var n = 1; n <= kerLuku; n++)
  {
    laskettu*=n;
  }
  document.getElementById('kertomaVastaus').innerHTML =
   '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
