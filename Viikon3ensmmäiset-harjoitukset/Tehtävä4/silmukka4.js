//Viikon 3 ensimmäiset harjoitukset/Tehtävä 4/Eriko Korhonen/4.4.2021
function count()
{
  var a = document.getElementById('factorial').value;
  var b = 1;
  for(var n = 1; n <= a; n++)
  {
    b*=n;
  }
  document.getElementById('answer').innerHTML =
   '<p>Luvun ' + a + ' kertoma on '+ b + '</p>';
}
