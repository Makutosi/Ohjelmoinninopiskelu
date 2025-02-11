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
            result += i + "<br>";
        }
    }

    output.innerHTML = result;
}

// ボタンがクリックされたら printNumbers() を実行
document.getElementById("showButton").addEventListener("click", printNumbers);
*/

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
