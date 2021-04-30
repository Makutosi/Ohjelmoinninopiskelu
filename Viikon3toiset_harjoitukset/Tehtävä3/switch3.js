//Viikon 3 toiset harjoitukset/Tehtävä 3/Eriko Korhonen/25.4.2021
//tämä on vielä kesken
function table()
{
  var jono = [];
  jono = [[9,5,3,2], [1,25,4,11], [8,9,12,10], [6,26,4,29], [9,2,11,27]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('ttaulu').innerHTML = taulu;
}
