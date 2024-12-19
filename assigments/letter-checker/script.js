/* Write a program that checks whether the word you enter contains the letter ö
   and writes the answer as either: yes or no*/

function checkWord() {
    var word = document.getElementById("wordInput").value;

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
}

var button = document.getElementById("checkButton");
button.addEventListener("click", checkWord);



