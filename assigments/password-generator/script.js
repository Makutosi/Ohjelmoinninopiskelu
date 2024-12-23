/* Write a program that converts the user-entered word into a password
by replacing every other letter with a capital Ö, i.e.
if the word is Kaappi  KÖaÖaÖpÖpÖiÖ*/

function generatePassword(word) {
    let password = '';  // 結果を保存する空の文字列を用意
    for (let i = 0; i < word.length; i++) {     // 入力された単語の長さ分だけループ
      password += word[i]; // 現在の文字を結果に追加
      password += 'Ö';     // すべての文字の後に常にÖを追加
    }
    return password;  // 最終的な結果を返す
  }
  
  document.getElementById('generateButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value;  // ユーザーの入力を取得
    const result = generatePassword(word);  // パスワードを生成
    document.getElementById('result').textContent = result;  // 結果を画面に表示
  });
  
  /*引数word（ユーザーが入力した単語）を受け取り、1文字ごとにÖを挿入した新しい文字列を生成する。
    passwordは空の文字列からスタート, この変数は最終的に変換された文字列を保持
    forループは入力された単語（例: Password）の各文字を1つずつ処理
    word[i]はi番目の文字を表す, たとえば、word[0]はP
    最終的に作成された文字列（例: PÖaÖsÖsÖwÖoÖrÖdÖ）を関数の戻り値として返す

    addEventListenerで、ボタンがクリックされたときに実行する処理を登録
    document.getElementById('wordInput').valueで、ユーザーが入力したテキストボックスの値を取得
    この値をgeneratePassword関数に渡し、変換された文字列をresultに保存
    document.getElementById('result').textContentを使って、変換後の文字列を結果表示用の<p>タグに出力
    
    ユーザーがwordInputのテキストボックスに単語を入力
    ボタンをクリックすると、clickイベントが発火し
    入力値を取得
    generatePassword関数で変換処理を実行
    結果をHTMLに表示
    
    ループの中での処理の流れ:
    i = 0: password = 'KÖ'
    i = 1: password = 'KÖaÖ'
    i = 2: password = 'KÖaÖaÖ'
    i = 3: password = 'KÖaÖaÖpÖ'
    i = 4: password = 'KÖaÖaÖpÖpÖ'
    i = 5: password = 'KÖaÖaÖpÖpÖiÖ'
    最終的にpassword = 'KÖaÖaÖpÖpÖiÖ'
    <p id="result">の中に変換後の文字列が表示

    +=を使用して文字列を動的に追加
    document.getElementByIdを使い、HTML内の要素を操作して表示結果を更新
    入力単語の長さに制限はなく、どんな文字列でも対応可能*/

//variation 1
/* 
function generatePassword(word) {
  let password = '';
  for (let i = 0; i < word.length; i++) {
    password += word[i];   // 現在の文字を追加
    password += '🌟';      // 「Ö」の代わりに絵文字を追加
  }
  return password;         // 最終的な結果を返す
}

document.getElementById('generateButton').addEventListener('click', function() {
  const word = document.getElementById('wordInput').value;  // ユーザーの入力を取得
  const result = generatePassword(word);                   // 結果を生成
  document.getElementById('result').textContent = result;  // 結果を画面に表示
});
*/
//  入力: Password
//  出力: P🌟a🌟s🌟s🌟w🌟o🌟r🌟d🌟
//  変更したい絵文字をこの行の '🌟' の部分に置き換えるだけ password += '🌸';


  
  
  
  