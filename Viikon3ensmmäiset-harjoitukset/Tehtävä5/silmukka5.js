//Viikon 3 ensimmäiset harjoitukset/Tehtävä 5/Eriko Korhonen/5.4.2021
function hipHeijaa()
{
  var tuloste = '';
  for(var x = 1; x <= 100; x++)
  {
    if(x%3==0 && x%5==0) //jos kolmella ja viidellä jaollinen
    {
      tuloste+='Hip Heijaa  ';
    }
    else if(x%5 == 0) //jos viidellä jaollinen
    {
      tuloste+='Heijaa  ';
    }
    else if(x%3 == 0) //jos kolemella jaollinen
    {
      tuloste+='Hip  ';
    }
    else {
      tuloste+=x+' ';
    }
    document.getElementById('output').innerHTML = tuloste;
  }
}
