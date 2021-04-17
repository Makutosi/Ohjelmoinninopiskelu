//Viikon2toiset harjoitukset/ehto3/Eriko Korhonen/14.4.2021
function check_leapyear()
  {
    var leapyear = document.getElementById("year").value;
    if ((leapyear % 4 == 0) && (leapyear % 100! = 0) || (leapyear % 400 == 0))
  {
  alert (leapyear+" on karkausvuosi.");
  }
  else
  {
  alert (leapyear+" ei ole karkausvuosi.");
  }
  }
