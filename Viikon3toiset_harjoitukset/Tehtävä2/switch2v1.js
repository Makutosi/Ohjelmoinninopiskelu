//Viikon 3 toiset harjoitukset/Tehtävä 2/Eriko Korhonen/20.4.2021
function lottery()
{
  var numbers = [];

  var win;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    //palautetaan satunnaisen kokonaisluvun väliltä 1-40
    win = Math.floor(Math.random()*40)+1;
    numbers[lotto] = win;
  }
//  numbers.sort();  lajittelee arvot merkkijonoiksi
//matriisin lajitteleminen satunnaisessa järjestyksessä, silti tulee samoja numeroja
  numbers.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById('array').innerHTML = '<p>'+numbers+'</p>';
}
