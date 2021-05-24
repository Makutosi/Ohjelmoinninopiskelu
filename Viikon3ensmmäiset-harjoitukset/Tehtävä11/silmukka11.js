//Viikon 3 ensimmäiset harjoitukset/Tehtävä 11/Eriko Korhonen/13.4.2021
function numeroidenSumma()
{
  var nro1, nro2, palku, ralku,
      psumma = 0, rsumma = 0, //Parillisten numeroiden summa, Parittomien numeroiden summa
      pluvut ='', rluvut =''; // Parilliset, parittomat tulostetaan

  nro1 = parseInt(document.getElementById('small').value);
  nro2 = document.getElementById('big').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else
  {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else
  {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostus').innerHTML
  = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
