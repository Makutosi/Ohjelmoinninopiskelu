//Viikon 3 ensimmäiset harjoitukset/Tehtävä 9/Eriko Korhonen/13.4.2021
function etsiSuurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusT').innerHTML =
  '<p>Pienin luku on ' + taulu[0] + ' ja suurin luku on  '+ taulu[taulu.length-1]+ '.';
}
