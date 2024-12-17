/* Write a program that converts the user-entered word into a password
by replacing every other letter with a capital Ö, i.e.
if the word is Kaappi  KÖaÖaÖpÖpÖiÖ*/

function generatePassword(word) {
    let password = '';
    for (let i = 0; i < word.length; i++) {
      password += word[i]; // 文字を追加
      password += 'Ö';     // すべての文字の後に常にÖを追加
    }
    return password;
  }
  
  document.getElementById('generateButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value;
    const result = generatePassword(word);
    document.getElementById('result').textContent = result;
  });
  
  
  
  
  
  
  