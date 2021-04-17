//Viikon 3 ensimmäiset harjoitukset/Tehtävä 5/Eriko Korhonen/5.4.2021
function hipHeijaa()
{
  var tuloste = '';
  for(var x = 1; x <= 100; x++)
  {
    if(x%3==0 && x%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(x%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(x%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=x+' ';
    }
    document.getElementById('lukujenTulostus').innerHTML = tuloste;
  }
}
