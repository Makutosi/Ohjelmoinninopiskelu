//Viikon 3 toiset harjoitukset/Tehtävä 3/Eriko Korhonen /1.5.2021
function muunnaTaulukoksi()
{
  var taulukko = [];
  taulukko = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
           [7, 4, 28, 14], [3, 10, 26, 7]];
  var tulosta = '<table border="1">';
  for(var j = 0; j < taulukko.length; j++)
  {
    tulosta += '<tr>';
    for(var k = 0; k < taulukko[j].length; k++)
    {
      tulosta += '<td>' + taulukko[j][k] + '</td>';
    }
    tulosta += '</tr>';
  }
  tulosta += '</table>';
  document.getElementById('ttaulu').innerHTML = tulosta;
}
