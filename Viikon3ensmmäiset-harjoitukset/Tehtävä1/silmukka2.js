//Viikon 3 ensimmäiset harjoitukset/Tehtävä 2/ERiko Korhonen/14.4.2021
function mitUmlaut()
{
  var word = document.getElementById('word').value;
  var password = "<p>";
  for(var i = 0; i < word.length; i++)
  {
    password += word[i] + 'Ü';
  }
  password += "</p>";
  document.getElementById('password').innerHTML = password;
}

/*tekstin lisäys jokaiseen taulukon elementtiin
for(var i = 0; i < array.length; i++)
{
  array[i] = "#" + array [i];
} */
