//Viikon 3 ensimmäiset harjoitukset/Tehtävä 3/Eriko Korhonen/11.4.2021
// korjattu versio/ 4.6.2021
function tsekataSana()
{
  var uusiSana = document.getElementById('check').value;
  var vastaus = 'ei ole';
  for(var i = 0; i < uusiSana.length; i++)
  {
     if(uusiSana[i] == 'ö' || uusiSana[i] == 'Ö' )
    {
      vastaus = 'on!';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
