//Viikon 2 ensimmäiset harjoitukset/Tehtävä3/Eriko Korhonen/1.4.2021
function check()
{
  var inputNumber = document.getElementById("number").value;
  //parillinen
  if ( inputNumber % 2 === 0)
  {
  alert(inputNumber + " on parillinen.");
  //pariton
  }
  /*else if (inputNumber = 0)
  {
    alert(inputNumber + " on nolla!")
  }*/
  else
  {
    alert(inputNumber + " on pariton.");
  }

}
