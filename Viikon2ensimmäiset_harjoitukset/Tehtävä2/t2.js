//Viikon 2 ensimmäiset harjoitukset/Tehtävä2/Eriko Korhonen/12.4.2021
function bigNumber()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if (l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.write("Annoit numerot: " + l1 + ', ' + l2 + ', ' + l3 + ', ' + l4 + ', ' + l5);
    document.write("<br>Suurin numero on " + suurin);
  }

  //parseInt( 'teksti');  muuttaa tekstin kokonaisluvuksi(integer)
  //getElementById() palauttaa elementin, jolla on määritetyn arvon tunnusmäärite.
  //useampi if-else  if->else if(eka ehto on epä tosi)->else
  //&& ja
  //document.write("teksti"); kirjoittaa tekstiä suoraan HTML-asiakirjaan
