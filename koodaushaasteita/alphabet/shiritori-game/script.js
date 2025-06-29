// script.js
var lastWord = ""; // 前の単語を保存する変数
var gameOver = false; // ゲームの状態

document.getElementById("submitButton").onclick = function() {
  if (gameOver) {
    document.getElementById("message").textContent = "ゲームは終了しました。リロードしてください。";
    return;
  }

  var input = document.getElementById("wordInput");
  var currentWord = input.value.trim(); // 入力された単語を取得
  var message = document.getElementById("message");

  if (currentWord === "") {
    message.textContent = "単語を入力してください。";
    return;
  }

  if (lastWord !== "") {
    var lastChar = lastWord[lastWord.length - 1];
    var firstChar = currentWord[0];

    if (lastChar !== firstChar) {
      message.textContent = "ルール違反！「" + lastChar + "」から始まる単語を入力してください。";
      return;
    }
  }

  if (currentWord[currentWord.length - 1] === "ん") {
    message.textContent = currentWord + "で「ん」で終わりました。あなたの負けです！";
    gameOver = true;
    return;
  }

  lastWord = currentWord;
  document.getElementById("lastWordDisplay").textContent = "前の単語: " + lastWord;
  message.textContent = "OK! 次の単語を入力してください。";
  input.value = ""; // 入力欄をクリア
};

/* スコアシステムを追加して得点を表示する。
単語の重複チェックをして、同じ単語を使わないようにする。
辞書APIを使って単語の正当性を判定する（日本語に対応したAPIを探すと面白いです！）。
タイムリミットを設定して、制限時間内に入力を促す。*/