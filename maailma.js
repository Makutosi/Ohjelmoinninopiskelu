function kaanna()
{
  var haettuTeksti = document.getElementById('teksti').value;
  var sananPituus = haettuTeksti.length;
  var uusiSana = '';
  for(var x = sananPituus-1; x >= 0; x--)
  {
    uusiSana = uusiSana + haettuTeksti[x];
  }
  document.getElementById('vastaus').innerHTML = uusiSana;
}
