//Viikon 3 ensimmäiset harjoitukset/Tehtävä 3/Eriko Korhonen/11.4.2021
function tarkistaKirjain()
{
  var uusiSana = document.getElementById('tsana').value;
  var vastaus = 'on';
  for(var k = 0; k < uusiSana.length; k++)
  {
     if(uusiSana[k] == 'Ä-' || uusiSana[k] == 'ü–' )
    {
      vastaus = 'ei ole';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
