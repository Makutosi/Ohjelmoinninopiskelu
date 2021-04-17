//Viikon3 ensimmäiset harjoitukset/Tehtävä 7/Eriko Korhonen/7.4.2021
function yhteen()
{
  yhteensa = 0;
  for(var z = 1; z <=10; z++)
  {
    yhteensa += z;
  }
  document.getElementById('lukujenTulostusY').innerHTML = '<p>'+ yhteensa + '</p>';
}
