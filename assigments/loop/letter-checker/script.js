/* Write a program that checks whether the word you enter contains the letter ö
   and writes the answer as either: yes or no*/

function checkWord() { //checkWord関数は、ボタンがクリックされたときに呼び出され、単語が「ö」を含んでいるかをチェック
    var word = document.getElementById("wordInput").value;
    //document.getElementById("wordInput") HTML内の入力フィールド（<input>要素）を取得
    //.valueプロパティ ユーザーが入力した文字列を取得し、wordという変数に格納

    // 入力が空の場合
    if (word.trim() === "") {
        document.getElementById("result").textContent = "Please enter a word.";
        return;
    }

    // 入力が文字以外の場合（数字や特殊文字を含む場合）
    for (var i = 0; i < word.length; i++) {
        var char = word[i];
        if (!("a" <= char && char <= "z") && 
            !("A" <= char && char <= "Z") && 
            char !== "ö" && char !== "Ö") {
            document.getElementById("result").textContent = "Please enter only letters.";
            return;
        }
    }

    // "ö"を含むかのチェック
    var result = word.includes("ö") ? "yes" : "no";
    document.getElementById("result").textContent = result;
    //document.getElementById("result") HTML内の<p>要素を取得
    //.textContentプロパティ この要素の中身をresult（"yes"または"no"）で書き換え
}

var button = document.getElementById("checkButton");
button.addEventListener("click", checkWord);
//document.getElementById("checkButton") HTML内のボタン要素（<button>）を取得
//addEventListener("click", checkWord) ボタンがクリックされたときにcheckWord関数を呼び出す


