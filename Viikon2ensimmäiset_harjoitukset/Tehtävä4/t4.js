//Viikon 2 ensimmäiset harjoitukset/Tehtävä4/Eriko Korhonen/2.4.2021
function ajoneuvo()
  {
    var age = parseInt(document.getElementById('age').value);
    if(age < 16)
    {
      document.write("Voit ajaa polkupyörää");
    }
    else if(age < 18)
    {
      document.write("Voit ajaa mopoa");
    }
    else {
      document.write("Voit ajaa autoa");
    }
  }
