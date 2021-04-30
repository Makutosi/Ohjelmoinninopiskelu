//Viikon 3 ensimmäiset harjoitukset/Tehtävä 3/Eriko Korhonen/11.4.2021
function checkUp()
{
  var uusiSana = document.getElementById('check').value;
  var vastaus = 'on';
  for(var w = 0; w < uusiSana.length; w++)
  {
     if(uusiSana[w] == 'Ä-' || uusiSana[w] == 'ü–' )
    {
      vastaus = 'ei ole';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
