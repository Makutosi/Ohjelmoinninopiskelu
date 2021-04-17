//Viikon 3 toiset harjoitukset/Tehtävä 1/Eriko Korhonen/14.4.2021
function laskePisteet()
{
  var pisteet = 0;
  var sana = document.getElementById('scsana').value;
  for(var i = 0; i < sana.length; i++)
  {
    switch (sana[i])
    {
      // ensinnä pienet kirjaimet läpi, sitten isot kirjaimet
     case 'a':
     case 'e':
     case 'i':
     case 'o':
     case 'u':
     case 'A':
     case 'E':
     case 'I':
     case 'O':
     case 'U':
        pisteet++;//+1p
        break;
      //
      case 's':
      case 'c':
      case 'r':
      case 'b':
      case 'l':
      case 'S':
      case 'C':
      case 'R':
      case 'B':
      case 'L':
        pisteet+=2;
        break;
      //umlaut
      case 'ä':
      case 'ö':
      case 'ü':
      case 'Ä':
      case 'Ö':
      case 'Ü':
        pisteet+=5;
        break;

      case 'x':
      case 'y':
      case 'z':
      case 'w':
      case 'X':
      case 'Y':
      case 'Z':
      case 'W':
        pisteet+=8;
        break;

      case 'k':
      case 'g':
      case 'p':
      case 'K':
      case 'G':
      case 'P':
        pisteet+=10;
        break;

      default:
        pisteet+=3;
    }
    document.getElementById('tscrabble').innerHTML =
    "<p>Sana " + sana + ":n"+ " pisteet ovat " + pisteet + "</p>";
  }
}
