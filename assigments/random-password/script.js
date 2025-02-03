/* Create a random password using English only, words of three or more letters, but without umlauts */

function getRandomCharacter() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*,.";
    var randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
// charactersに、 , . 追加　（characters の中身が変われば、ランダムに選ばれる文字の種類も変わる）
// ランダムに選ぶ仕組みは変わらないが、どの文字が選ばれるかは characters によって決まる

function generatePassword(word) {
    var password = "";
    for (var i = 0; i < word.length; i++) {
        password += word[i];          // 入力した文字を追加
        password += getRandomCharacter();  // ランダムな文字を追加
    }
    return password;
}

document.getElementById("generateButton").addEventListener("click", function() {
    var word = document.getElementById("wordInput").value;

    // 3文字未満のチェック
    if (word.length < 3) {
        document.getElementById("result").textContent = "Please enter a word of 3 or more letters.";
        return;
    }

    // アルファベット以外のチェック
    if (!/^[A-Za-z]+$/.test(word)) {
        document.getElementById("result").textContent = "Only English letters (A-Z, a-z) are allowed.";
        return;
    }

    var result = generatePassword(word);
    document.getElementById("result").textContent = result;
});

/* 
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
charactersという変数には、パスワードに使用できる文字の集合が格納されている
英大文字（A-Z）、英小文字（a-z）、数字（0-9）、特殊文字（!@#$%^&*）

var randomIndex = Math.floor(Math.random() * characters.length);
Math.random() は 0 以上 1 未満のランダムな浮動小数点数を生成。
この数に characters.length を掛けることで、characters の長さに応じたランダムな数を生成。

Math.floor() を使うことで、小数点以下を切り捨て、0 から characters.length - 1 の整数が得られる。
これが randomIndex というインデックス番号になります。

return characters[randomIndex];
生成された randomIndex を使って、characters の中からランダムな1文字を取り出し、それを返す。
例えば、randomIndex が 10 なら、characters[10] が "K" になる。
この関数は、毎回ランダムな文字（アルファベット、大文字・小文字、数字、記号のいずれか）を返す役割を持っている

var password = "";
password という変数を初期化。最初は空の文字列。この変数に、最終的に生成されるパスワードが追加されていく。

for (var i = 0; i < word.length; i++) {
word.length は、word（ユーザーが入力した単語）の長さを取得。
この for ループは、i を 0 から word.length - 1 までの値に設定し、word の各文字を1つずつ処理。

password += word[i];
word[i] は、word の i 番目の文字を指す。
この行では、現在の文字を password に追加。つまり、最初に入力した文字列がそのままパスワードに追加される。

password += getRandomCharacter();
この行では、先ほど説明した getRandomCharacter() 関数を呼び出し、ランダムに選ばれた1文字を password に追加。
つまり、ユーザーが入力した各文字の後に、ランダムな文字が追加される。

}
for ループが終わると、word の各文字に対してランダムな文字が追加され、最終的なパスワードが完成。

return password;
最後に、生成されたパスワード（password）を返す。

document.getElementById("generateButton").addEventListener("click", function() {
    var word = document.getElementById("wordInput").value;
document.getElementById("generateButton"):
ここでは、HTMLの中でIDがgenerateButtonの要素を選択。つまり、「Generate Password」ボタンを指す。

.addEventListener("click", function() {...}):
「Generate Password」ボタンがクリックされた時に、指定された関数が実行される。つまり、ボタンが押されると中の処理が開始される。

var word = document.getElementById("wordInput").value;:
この行では、HTML内のid="wordInput"の<input>タグ（ユーザーが入力する場所）の値を取得。
valueプロパティがユーザーが入力した内容を返す。取得した文字列をwordという変数に保存。

    if (word.length < 3) {
        document.getElementById("result").textContent = "⚠️ Please enter a word with 3 or more letters.";
        return;
    }
if (word.length < 3):
ここでは、ユーザーが入力した文字列の長さが3文字未満かどうかをチェック
word.lengthは文字列の長さを返すため、もしそれが3未満であれば条件がtrue

document.getElementById("result").textContent = "⚠️ Please enter a word with 3 or more letters.";:
この行では、id="result"の<p>タグにエラーメッセージを表示。textContentはその要素にテキストを設定する方法。
エラーメッセージは「⚠️ Please enter a word with 3 or more letters.」

return;:
returnは関数の処理を終了させる。この場合、文字列が3文字未満ならば、エラーメッセージを表示、次の処理に進まないようにする

    if (!/^[A-Za-z]+$/.test(word)) {
        document.getElementById("result").textContent = "⚠️ Only English letters (A-Z, a-z) are allowed.";
        return;
    }
if (!/^[A-Za-z]+$/.test(word)):
これは、正規表現を使って、入力されたwordが「A-Z（大文字）」および「a-z（小文字）」の英字のみで構成されているかをチェックする部分
/^[A-Za-z]+$/ は、文字列がアルファベット（大小英字）のみで構成されているかを確認するための正規表現
^ は文字列の始まりを、$ は文字列の終わり
[A-Za-z] は大文字（A-Z）と小文字（a-z）のアルファベットを指定し、+ は「1回以上の文字」を意味する

.test(word) は、この正規表現がwordにマッチするかどうかをチェック。
もしアルファベット以外の文字が含まれている場合は、!（否定）によってtrueになる

document.getElementById("result").textContent = "⚠️ Only English letters (A-Z, a-z) are allowed.";:
入力に英字以外の文字が含まれていた場合、再度id="result"の<p>タグにエラーメッセージを表示

return;:
入力が不正な場合に処理を終了し、次の処理に進まないようにする

    var result = generatePassword(word);
    document.getElementById("result").textContent = result;
});
var result = generatePassword(word);:
generatePassword(word)という関数を呼び出して、ユーザーが入力したwordを元にパスワードを生成。その結果をresult変数に保存

document.getElementById("result").textContent = result;:
最後に、生成されたパスワード（result）をid="result"の<p>タグに表示。これでユーザーが生成されたパスワードを見ることができる*/