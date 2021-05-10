// Viikon 2 toiset harjoitukset/ehto 4/Eriko Korhonen/ 1.5.2021
// valmis versio
function summaKeskiarvo()
{
  var n1, n2, n3, n4, n5;
  var summa, keskiarvo;
  var tulos;

  n1 = Number(document.getElementById("luku1").value);
  n2 = Number(document.getElementById("luku2").value);
  n3 = Number(document.getElementById("luku3").value);
  n4 = Number(document.getElementById("luku4").value);
  n5 = Number(document.getElementById("luku5").value);

  summa = n1+ n2+ n3+ n4+ n5;
  keskiarvo = summa/5;
  tulos = "lukujen summa on: ";
  tulos += summa;
  tulos += " ja keskiarvo on: ";
  tulos += keskiarvo;
  document.write(tulos);
}
