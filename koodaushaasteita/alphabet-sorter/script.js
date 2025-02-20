/* Write a function that prints the letters of a given word in alphabetical order. 
For example, webmaster -> abeemrstw */

function sortAlphabet() {
    var input = document.getElementById("wordInput").value;  // 入力値を取得
    var lettersArray = Array.from(input);  // 文字列を配列に変換
    var sortedArray = lettersArray.sort();  // 配列をソート
    var sortedWord = sortedArray.join("");  // 配列を文字列に戻す
    document.getElementById("result").textContent = sortedWord;  // 結果を表示
}

/* 
関数定義 function sortAlphabet() { ... }
関数とは、一連の処理をまとめておき、必要なときに呼び出せるもの
-ボタンがクリックされたときに実行される。
-ユーザーが入力した単語を取得し、それをアルファベット順に並び替える。
-並び替えた結果を画面に表示

ユーザーが入力した単語を取得 var input = document.getElementById("wordInput").value;
HTML の id="wordInput" の要素（＝入力ボックス）を取得  document.getElementById("wordInput")
入力ボックスの中にある文字（ユーザーが入力した単語）を取得  .value
取得した値を input という変数に保存  var input

取得した単語を 1文字ずつの配列 に変換  var lettersArray = Array.from(input);
文字列 input を1文字ずつ分解して 配列 に変換  Array.from(input)
変換した配列を lettersArray という変数に保存  var lettersArray
"hello" と入力した場合、lettersArray には ["h", "e", "l", "l", "o"] という配列が入る

配列をアルファベット順に並べ替える　　var sortedArray = lettersArray.sort();
lettersArray の中身を アルファベット順 に並び替える　lettersArray.sort()
並び替えた結果を sortedArray に保存　var sortedArray
lettersArray = ["h", "e", "l", "l", "o"] の場合、sortedArray は ["e", "h", "l", "l", "o"] 

ソートされた配列を 再び文字列に戻す　　var sortedWord = sortedArray.join("");
sortedArray の要素を ""（空文字）でつなげて、一つの文字列に　sortedArray.join("")
つなげた文字列を sortedWord に保存　var sortedWord
sortedArray = ["e", "h", "l", "l", "o"] の場合、sortedWord は "ehllo"

ソートされた単語を 画面に表示　document.getElementById("result").textContent = sortedWord;
HTML の id="result" の要素（＝<span id="result">）を取得　document.getElementById("result")
sortedWord の内容を <span> に表示　.textContent = sortedWord
sortedWord = "ehllo" の場合、
<span id="result">ehllo</span> となり、ブラウザに "ehllo" と表示される

1️⃣ 文字列 → 配列（1文字ずつ分解）
→ Array.from(input)

2️⃣ 配列をアルファベット順にソート　
→ lettersArray.sort()
sort() メソッドは 配列専用(Array)  の関数なので、まず 文字列を配列に変換 する必要がある

3️⃣ ソートされた配列 → 再び文字列に結合
→ sortedArray.join("")

var input = "webmaster";              // ① 文字列
var lettersArray = Array.from(input); // ② 配列に変換
var sortedArray = lettersArray.sort(); // ③ ソート
var sortedWord = sortedArray.join(""); // ④ 文字列に戻す

console.log(sortedWord); // 結果: "abeemrstw"
*/