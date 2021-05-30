//2.viikko koodaushaasteita/ Eriko Korhonen/ 17.3.2021
// tehtävä 1
function pieninSuurin(taulu)
{
  taulu.sort((a,b) => a-b);
  var pienin = taulu.shift();
  var suurin = taulu.pop();
  console.log ("taulikon pienin oli: " + pienin + " ja suurin oli: " + suurin);
}
pieninSuurin([6, 8, 2, 9, 5, 4, 7, 14, 44, 67, 99, 22, 33, 111, 1111, 11111]);

// tehtävä 2
function parillinenPariton(luku)
{
  if( luku%2 == 0) // % jakojäänös
  {
    console.log("luku on parillinen");
  }
  else
  {
    console.log("luku on pariton");
  }
}
parillinenPariton(3);

// tehtävä 3
function numeroNimeksi(numero)
{
  switch(numero)
  {
    case 1:
      console.log("tammikuu");
      break;
    case 2:
      console.log("helmikuu");
      break;
    case 3:
      console.log("maaliskuu");
      break;
    case 4:
      console.log("huhtikuu");
      break;
    case 5:
      console.log("toukokuu");
      break;
    case 6:
      console.log("kesäkuu");
      break;
    case 7:
      console.log("heinäkuu");
      break;
    case 8:
      console.log("elokuu");
      break;
    case 9:
      console.log("syyskuu");
      break;
    case 10:
      console.log("lokakuu");
      break;
    case 11:
      console.log("marraskuu");
      break;
    case 12:
      console.log("joulukuu");
      break;
    default:  // jos antaa jokin numeron paitsi 1-12 tai jotain muuta
      console.log("Antamallasi numerolla ei löydy kuukautta");
      break;
    }
}
numeroNimeksi(5);  // ("viisi"); ei toimii

// tehtävä 4
// luokka on olioiden yläpuolella
// luokka on olion rakennuspiirustus
// luokan avuilla rakennetaan olioita
// Luokka alkaa isolla kirajaimella, erotetaan kyseessä on luokka
// luokalla on constructor
// oletusarvot syötetään
class Osoiiterekisteri {
  constructor (etunimi, sukunimi, lahiosoite, postinumero,
               postitoimipaikka, puhelin, sahkoposti )
  {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.lahiosoite = lahiosoite;
    this.postinumero = postinumero;
    this.postitoimipaikka = postitoimipaikka;
    this.puhelin = puhelin;
    this.sahkoposti = sahkoposti;
  }
}
var Jyri = new Osoiiterekisteri("Jyri", "Lindroos", "Keskikatu 3", "04200"
                        "Kerava", "0401744562", "jyri.lindroos@keuda.fi" );
var Eija = new Osoiiterekisteri("Eija", "Lumme"; "Keskikatu 3", "04200",
                         "Kerava", "0401744444", "eija.lumme@keuda.fi");

console.log(Eija.etunimi + "" + Eija.sukunimi);
//testaus
console.log(Jyri.sukunimi);

// Tehtävä 5
// Array.from  jolla voi muutta teksti taulukoksi
function aakkosissa(teksti);
{
  var taulu = Array.from(teksti);
  //console.log(taulu);
  taulu.sort();
  //console.log(taulu);
  teksti = taulu.join("").toString(); // pisteet pois
  //console.log(taulu);
  return teksti;
}
console.log(aakkosissa("webmaster"));

// Tehtävä 6
function arviointi(pisteet)
{
  if(pisteet < 50)
  {
    return "Hylätty";
  }
  else if(pisteet < 60)
  {
    return "T1";
  }
  else if(pisteet < 70)
  {
    return "T2";
  }
  else if(pisteet < 80)
  {
    return "H3";
  }
  else if(pisteet < 90)
  {
    return "H4";
  }
  else
  {
    return "K5";
  }
}
console.log("Daniel " + arviointi(80));

// 2.viikko Koodaushaasteita 3/
// Tehtävä 1
// Amstrongin luku(narcissistic number),kolminumeroisia lukuja
//Erilisten lukujen kuutiot on sama kuin itse luku.
// a3 + b3 + c3 = abc
function amstronginLuvut()
{
  var lt; // luku taulukoksi
  //var laskuri = 0;
  for(var x = 100; x < 1000; x++) // 100 -999
  {
    lt = x.toString().split('');
  // Math.pow(lt[luku],potenssi)
  if(Math.pow(lt[0],3)+Math.pow(lt[1],3)+Math.pow(lt[2],3)== x)
  // a3 + b3 + c3 = abc
  {
    console.log(x); // 153, 370, 371, 407
  }
 }
}
amstronginLuvut();

// Tehtävä 2
// chr tähti
function tahdet()
{
  var x, y, chr;
  for (x=1; x <=6; x++)
  {
    for (y=1; y < x; y++)
    {
      chr=chr+("*");
    }
    console.log(chr);
    chr= '';
  }
}
tahdet();

// Tehtävä 3
function testi(jono)
{
  taulukko = Array.from(jono);
  for(i = 0, i < jono.length; i++)
  {
    switch (taulukko[i])
    {
      case "a":  // Jos kirjain on a, muutetaan 4:ksi
        taulukko[i] = 4;
        break;
      case "e";
        taulukko[i] = 3;
        break;
      case "i";
        taulukko[i] = 1;
        break;
      case "o";
        taulukko[i] = 0;
        break;
      case "s";
        taulukko[i] = 5;
        break;
     }
   }
// replace -komennon kauttaviiva -> seuraava merkki on merkitsevä
// korvaa pilkku, globaalisti, eli kaikki pilkut ei millään
// taulukko takaisin tekstiksi
// muutetaan ,  g kaikki
   teksti = taulukko.toString().replace(/,/g,'');
   console.log(teksti);
}

// Tehtävä 4
for (var n = 1; n <= 100; n++)
{
  if (n%3==0 && n%5==0)  // % jakojäänös  && Ja
  {
    console.log("hik-up");
  }
  else if(n%5 == 0)
  {
    console.log("up");
  }
  else if(n%3 == 0)
  {
    console.log("hik");
  }
  else
  {
    console.log(n);
  }
}
