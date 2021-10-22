//YksinkertainenKysely JavaScript tietovisa
var yhteensa = 5; //montako kysymystä on
var pisteet = 0; //alustamme alussa yhteispisteet 0:yksi

//Haetaan käyttäjän syötteet
//Tiedämme lomakkeen nimen "kyselyLomake" ja kysymyksen nimen "k1"...
//Tallensimme muuttujaan k1 lomakkeelta arvon...k5
var k1 = docment.forms["kyselyLomake"]["k1"].value;
var k2 = docment.forms["kyselyLomake"]["k2"].value;
var k3 = docment.forms["kyselyLomake"]["k3"].value;
var k4 = docment.forms["kyselyLomake"]["k4"].value;
var k5 = docment.forms["kyselyLomake"]["k5"].value;

//Tarkastetaan, onko käyttäjä syöttänyt kaikki tiedot
