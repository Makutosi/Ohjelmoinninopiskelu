/* password-generator v1 */

function generatePassword(word) {
    const emojis = ['🌟', '😊', '🔥', '🌸', '🎉']; // 使用する絵文字のリスト
    let password = '';
    for (let i = 0; i < word.length; i++) {
      password += word[i];                       // 現在の文字を追加
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]; // ランダムな絵文字を選ぶ
      password += randomEmoji;                   // ランダム絵文字を追加
    }
    return password;
  }
  
  document.getElementById('generateButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value;  // ユーザーの入力を取得
    const result = generatePassword(word);                   // 結果を生成
    document.getElementById('result').textContent = result;  // 結果を画面に表示
  });
  