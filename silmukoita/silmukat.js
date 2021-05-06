// Silmukkaa 10.3.2021
// for-lause
// x alkaa nollasta ja niin kauan, kun lauseessa on kirjaimia 22.
var lause = "Olipa kerran onnimanni";
for (var x = 0; x < lause.length; x++) // x < 22 (lauseen pituus)
{
  console.log(lause[x]);// kirjoittaa 22+
}
//console.log("Kukkuu");
  //file > settings > install > script
  // packages > script > run script    ctrl + shift + B

//nurinpäin
var lause = "Olipa kerran onnimanni";
for (var x = lause.length-1; x > 0; x--)  // -1, koska 21: sta aloitetaan
{                                         // lause.length  undefined
  console.log(lause[x]);
}

// while- lause
var x = 0;
while (x < lause.length)
{
  console.log(lause[x]);
  x++; //kasvatus
}

//nurinpäin
var x = lause.length-1;
while (x > 0)
{
  console.log(lause[x]);
  x--;
}

// do-while
var x = 0;
do
{
  console.log(lause[x]);
  x++;
}
while (x < lause.length);

// nurinpäin
var x lause.length;
do
{
  console.log(lause[x]);
  x--;
}
while(x >= 0);
