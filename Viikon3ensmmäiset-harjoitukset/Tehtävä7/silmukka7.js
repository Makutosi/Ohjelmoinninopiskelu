//Viikon3 ensimmäiset harjoitukset/Tehtävä 7/Eriko Korhonen/7.4.2021
function sum()
{
  addition = 0;
  for(var z = 1; z <=10; z++)
  {
    addition += z;
  }
  document.getElementById('output').innerHTML = '<p>'+ addition + '</p>';
}
