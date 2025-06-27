/* Enter a Scrabble word and the program will calculate the points for each letter */

function calculateScore() {
    var word = document.getElementById("word").value.trim().replace(/\s+/g, ""); // すべてのスペースを削除
    if (word === "") {
        document.getElementById("result").innerHTML = "Please enter a word.";
        return;
    }
    
    word = word.toUpperCase(); // すべて大文字に変換
    var score = 0;
    
    // 英字のみチェック（A-Z, Ä, Ö, Ü）
    if (!/^[A-ZÄÖÜ]+$/.test(word)) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter only letters (A-Z, Ä, Ö, Ü).";
        return;
    }

    for (var i = 0; i < word.length; i++) {
        var letter = word[i];

        switch (letter) {
            case 'A': case 'E': case 'I': case 'O': case 'U':
                score += 1;
                break;
            case 'S': case 'C': case 'R': case 'B': case 'L':
                score += 2;
                break;
            case 'Ä': case 'Ö': case 'Ü':
                score += 5;
                break;
            case 'X': case 'Y': case 'Z': case 'W':
                score += 8;
                break;
            case 'K': case 'G': case 'P':
                score += 10;
                break;
            default:
                score += 3;
        }
    }

    document.getElementById("result").innerHTML = "The word '" + word + "' Total Score: " + score + ".";
}

/* 
function calculateScore() {  関数の定義
この関数はボタンが押されたときに呼び出され、入力された単語のスコアを計算して結果を表示

入力された単語の取得と前処理
ユーザーが入力した単語を取得し、余計なスペースを取り除くことで正しく処理できるようにする。
var word = document.getElementById("word").value.trim().replace(/\s+/g, "");
document.getElementById("word") は、HTML内の <input> 要素（IDが word）を取得
.value は、ユーザーが入力したテキストを取得

文字列のスペースを処理するためのメソッド
.trim() は、 文字列の 先頭 (" ") と 末尾 (" ") の 空白 を削除
var str = "  Hello World!  ";
console.log(str.trim()); // "Hello World!"

.replace(/\s+/g, "") は、入力された文字列のすべての空白（改行やスペースなど）を削除

->.trim() を最初に使うことで、前後の不要な空白を削除 する。
    その後、単語の途中の空白を削除する。

空文字チェック（バリデーション）ユーザーが何も入力せずにボタンを押した場合にエラーを表示
if (word === "") {
    document.getElementById("result").innerHTML = "Please enter a word.";
    return;
}
word が空文字（""）の場合、エラーメッセージ "Please enter a word." を <div id="result"> に表示
return; で関数の処理を中断し、それ以上の処理を行わないようにする。

すべての文字を大文字に変換 大文字・小文字の区別をなくし、処理を簡単にする（例：a と A を同じ扱いにする）
word = word.toUpperCase();

入力のバリデーション（A-Z, Ä, Ö, Ü のみ許可） 数字や特殊文字などの無効な入力を防ぐ
if (!/^[A-ZÄÖÜ]+$/.test(word)) {
    document.getElementById("result").innerHTML = "Invalid input. Please enter only letters (A-Z, Ä, Ö, Ü).";
    return;
}
/^[A-ZÄÖÜ]+$/ という 正規表現 を使って、word が A～Z, Ä, Ö, Ü 以外の文字を含んでいないか をチェック。
.test(word) は word がこのルールに一致するかどうかを判定
! をつけることで「一致しなかった場合」にエラーメッセージを表示し、処理を終了

ユーザーが入力した単語のスコアを計算するための変数
var score = 0; score という変数を定義し、初期値を 0 にする


入力された単語の各文字のスコアを計算するために、1文字ずつ処理する
for (var i = 0; i < word.length; i++) {
    var letter = word[i];
for ループを使って word の各文字を順番に処理
word[i] で i 番目の文字を取得し、letter という変数に代入

各文字に応じた点数を score に加算する
switch (letter) {
    case 'A': case 'E': case 'I': case 'O': case 'U':
        score += 1;
        break;
    case 'S': case 'C': case 'R': case 'B': case 'L':
        score += 2;
        break;
    case 'Ä': case 'Ö': case 'Ü':
        score += 5;
        break;
    case 'X': case 'Y': case 'Z': case 'W':
        score += 8;
        break;
    case 'K': case 'G': case 'P':
        score += 10;
        break;
    default:
        score += 3;
}
switch 文を使い、letter に応じて score に対応する点数を加算。
break; は、各ケースの処理が終わったら switch 文を抜けるため

計算結果をユーザーに表示
document.getElementById("result").innerHTML = "The word '" + word + "' Total Score: " + score + ".";
<div id="result"> にスコア結果を表示

しっかりとバリデーションを行いながらスコアを計算する設計になっている
*/


