//Viikon 3 ensimmäiset harjoitukset/Tehtävä 6/Eriko Korhonen/7.4.2021
function kymppi()
{
  var zehn = '<p>';
  for(var z = 1; z <=10; z++)
  {
    zehn += z + ' ';
  }
  zehn += '!</p>';
  document.getElementById('ersteZehn').innerHTML = zehn;
}
