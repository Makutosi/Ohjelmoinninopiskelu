//Viikon 3 ensimmäiset harjoitukset/Tehtävä 8/Eriko Korhonen/12.4.2021
function potenssi()
{
  var koro = document.getElementById('kor').value;
  var pote = document.getElementById('pot').value;
  yht = koro;
  for(var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('lukujenTulostusP').innerHTML = '<p>' + yht + '</p>';
}
