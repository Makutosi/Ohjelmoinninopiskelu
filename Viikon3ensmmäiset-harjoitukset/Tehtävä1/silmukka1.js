//Viikon 3 ensimmäiset harjoitukset!Tehtävä 1/Eriko Korhonen/14.4.2021
function kaikkiParilliset()
{
  var num = parseInt(document.getElementById('even').value);
  var line = "<p>";
  for(var i = 2; i <= num; i= i+2)
  {
    line+=i;
    line+=" ";
  }
  line+="</p>";
    document.getElementById('parilliset').innerHTML = line;
}
// +=    x += y   x = x + y
