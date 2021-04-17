//Viikon 3 ensimmäiset harjoitukset!Tehtävä 1/Eriko Korhonen/14.4.2021
function tulostaParilliset()
{
  var arvo = parseInt(document.getElementById('even').value);
  var jono = "<p>";
  for(var i = 2; i <= arvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}
