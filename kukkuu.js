function testi()
{
  console.log("kukkuu");
}
function laskeYhteen(luku1,luku2)
{
  return luku1+luku2;
}
function nimi(joku)
{
  if(joku == "Jyri")//==
  {
    console.log("Olet hyvä tyyppi!");
  }
  else if(joku.length >6)
  {
    console.log("Nimesi on aika pitkä");
  }
  else {
    console.log("Heippa " + joku);
  }
}
//testi();
//oikea>run in atom tai WIN + Alt + R
//console.log(laskeYhteen(3,5));
nimi("Jaakko");
