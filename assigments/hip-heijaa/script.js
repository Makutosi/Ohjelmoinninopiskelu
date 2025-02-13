/* Write a program that prints the numbers 1-100 to the screen, but
so that if the number is divisible by 3, it prints hip and
if it is divisible by 5, it prints heijaa and if it is divisible by both 5 and 3 */

function printNumbers() {
    var output = document.getElementById("output");
    output.innerHTML = ""; // 一度クリアする
    var fragment = document.createDocumentFragment(); // 効率的に追加するためのフラグメント

    for (var i = 1; i <= 100; i++) {
        var li = document.createElement("li"); // <li> 要素を作成

        if (i % 3 === 0 && i % 5 === 0) {
            li.textContent = "hipheijaa";
        } else if (i % 3 === 0) {
            li.textContent = "hip";
        } else if (i % 5 === 0) {
            li.textContent = "heijaa";
        } else {
            li.textContent = i;
        }

        fragment.appendChild(li); // 一時的にフラグメントに追加
    }

    output.appendChild(fragment); // 最後にまとめて追加（効率UP）
}

// ボタンがクリックされたら printNumbers() を実行
document.getElementById("showButton").addEventListener("click", printNumbers);

/* 
var output = document.getElementById("output");
HTML 内の id="output" を持つ要素  <ul id="output"></ul>を取得し,output に対して、リストを追加

output.innerHTML = ""; ボタンを押すたびに新しいリストを生成するため、以前のリストを削除 

var fragment = document.createDocumentFragment();
document.createDocumentFragment() は 仮のコンテナ で、DOM の再描画回数を減らして処理を効率化

document.createElement("li") で リストの項目 (<li>) を作成

fragment.appendChild(li); さっき作った <li> 要素を 一時的に fragment に追加 
appendChild() は、指定した要素を 親要素の最後に追加 するメソッド
例えば、HTML の <ul> 要素の中に <li> を追加する場合などに使います

output.appendChild(fragment); ループが終わったあと、fragment に追加した全ての <li> を output に追加

document.getElementById("showButton").addEventListener("click", printNumbers);
document.getElementById("showButton") で、id="showButton" を持つ ボタン を取得。
.addEventListener("click", printNumbers) で、そのボタンがクリックされたら printNumbers() を実行するように設定
*/

/*
function printNumbers() {
    var output = document.getElementById("output");
    var result = "";

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "hipheijaa<br>";
        } else if (i % 3 === 0) {
            result += "hip<br>";
        } else if (i % 5 === 0) {
            result += "heijaa<br>";
        } else {
            result += i + "<br>"; //HTMLの 改行タグ 
        }
    }

    output.innerHTML = result;
}

// ボタンがクリックされたら printNumbers() を実行
document.getElementById("showButton").addEventListener("click", printNumbers);
*/
/* 
関数定義: printNumbers() HTMLのボタンがクリックされたときに実行されます。
var output = document.getElementById("output");
var output は変数 output を定義
document.getElementById("output") は、HTML ドキュメント内に存在する id="output" の要素を取得するためのメソッド

var result = ""; 最初は空の文字列, 最終的に画面に表示する内容を格納するための変数
output.innerHTML = result; ループが終わった後、result には"hip"、"heijaa"、"hipheijaa"、または数字がHTMLとして格納されます

document.getElementById("showButton") 
ボタン要素を取得し、そのボタンがクリックされたときに printNumbers 関数が実行されるように設定
*/
/* 
function printNumbers() {
    var output = document.getElementById("output");
    var result = "";

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "hipheijaa";
        } else if (i % 3 === 0) {
            result += "hip";
        } else if (i % 5 === 0) {
            result += "heijaa";
        } else {
            result += i;
        }

        // 最後の要素でない場合、コンマを追加
        if (i < 100) {
            result += ", ";
        }
    }

    output.innerHTML = result;
}*/
/* 
「3と5の倍数を見つけよう！」みたいな学習ゲーム に応用
ユーザーに 「この数字は何？」と質問して答えさせるクイズ 形式
「FizzBuzz問題」 という有名なコーディング試験の応用版
「クーポン番号を表示」 や 「ランダムな名言を表示」 するボタン
「〇〇の法則」 みたいな楽しいツールに変えられる。
例えば、「1〜100までの数の代わりに、動物の名前をランダムに表示する」なども面白い
ユーザーが数字を入力して、その範囲で計算できるようにする。
表示をリスト (<ul><li>) にして、もっと見やすくする。
ボタンを押すたびにランダムな背景色が変わるようにする*/
