//Viikon 3 toiset harjoitukset/Tehtävä 1/Eriko Korhonen/14.4.2021
function count()
{
  var pisteet = 0;
  var sana = document.getElementById('scrabble').value;
  for(var i = 0; i < sana.length; i++)
  {
    switch (sana[i])
    {
      // vaihtoehto 1
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
        break; //lopetetaan break-komentoon, muuten ei lopu koskaan.

      // vaihtoehto 2
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

      // vaihtoehto 3,umlaut
      case 'ä':
      case 'ö':
      case 'ü':
      case 'Ä':
      case 'Ö':
      case 'Ü':
        pisteet+=5;
        break;

      // vaihtoehto 4
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

      // vaihtoehto 5
      case 'k':
      case 'g':
      case 'p':
      case 'K':
      case 'G':
      case 'P':
        pisteet+=10;
        break;

      default: // ja loput
        pisteet+=3;
    }
    
    document.getElementById('check').innerHTML =
    "<p>Sana " + sana + ":n"+ " pisteet ovat " + pisteet + "</p>";
  }
}
