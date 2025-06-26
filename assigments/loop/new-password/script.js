/* Modify the password puzzle so that it draws the letter Ö instead of Ö. */

function getRandChar() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return chars[Math.floor(Math.random() * chars.length)];
}

function addÖ(word) {
    var pass = "";
    for (var i = 0; i < word.length; i++) {
        pass += word[i];  
        pass += "Ö";  
    }
    return pass;
}

function replaceÖ(pass) {
    var newPass = "";
    for (var i = 0; i < pass.length; i++) {
        newPass += (pass[i] === "Ö") ? getRandChar() : pass[i];
    }
    return newPass;
}

document.getElementById("generateButton").addEventListener("click", function() {
    var word = document.getElementById("wordInput").value;
    
    var tempPass = addÖ(word);  // Öを追加した途中経過  temporary（一時的な） の略
    document.getElementById("result").textContent = "Step 1: " + tempPass + "\n";  // 途中経過表示
    
    var finalPass = replaceÖ(tempPass);  // 最終パスワード
    setTimeout(function() {  
        document.getElementById("result").textContent += "Step 2: " + finalPass;  // 最終結果表示
    }, 1000);  // 少し待ってから表示（見やすくするため）
});

/* 
function getRandChar() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return chars[Math.floor(Math.random() * chars.length)];
}
getRandChar() 関数
英大文字 (A-Z)、英小文字 (a-z)、数字 (0-9)、特殊記号 (!@#$%^&*) のいずれかをランダムに1つ選んで返す

Math.random()  0以上1未満（0 ≤ x < 1） のランダムな小数を返す 
0.1234  0.5678

Math.random() * chars.length
chars.length は chars の文字数（長さ） "ABC".length === 3  Math.random() = 0.1 の場合 → 0.1 * 3 = 0.3
つまり、0以上 chars.length 未満の小数が得られる

Math.floor(Math.random() * chars.length)
Math.floor() は 小数点以下を切り捨てて整数にする 関数 
つまり、Math.floor(Math.random() * chars.length) は、0 以上 (chars.length - 1) 以下の整数を作る
chars.length = 3 の場合：
Math.random() = 0.1 → 0.1 * 3 = 0.3 → Math.floor(0.3) = 0
Math.random() = 0.9 → 0.9 * 3 = 2.7 → Math.floor(2.7) = 2
Math.random() = 0.5 → 0.5 * 3 = 1.5 → Math.floor(1.5) = 1

chars[Math.floor(Math.random() * chars.length)]
chars[...] は 文字列 chars の特定の位置の文字を取得 する
Math.random() = 0.1 → Math.floor(0.3) = 0 → chars[0] = "A"
Math.random() = 0.9 → Math.floor(2.7) = 2 → chars[2] = "C"
Math.random() = 0.5 → Math.floor(1.5) = 1 → chars[1] = "B"
つまり、chars[...] によって、chars の中からランダムな1文字が選ばれる

return chars[Math.floor(Math.random() * chars.length)];
Math.random() で 0～1 の小数を取得。
Math.random() * chars.length で 0 以上 chars.length 未満 の小数を取得。
Math.floor(...) で整数（0 以上 chars.length - 1 以下）に変換。
chars[...] で、その位置の文字を取得。

function addÖ(word) {
    var pass = "";
    for (var i = 0; i < word.length; i++) {
        pass += word[i];  
        pass += "Ö";  
    }
    return pass;
}
文字列 word の各文字の間に "Ö" を追加し、新しい文字列を作る
pass を空文字 "" で初期化。
for ループで word の各文字に対して：
そのまま pass に追加。
さらに "Ö" を追加。
最後に、新しく作られた pass を返す。
addÖ("hello"); -> "hÖeÖlÖlÖoÖ"

function replaceÖ(pass) {
    var newPass = "";
    for (var i = 0; i < pass.length; i++) {
        newPass += (pass[i] === "Ö") ? getRandChar() : pass[i];
    }
    return newPass;
}
"Ö" をランダムな文字 (getRandChar() の結果) に置き換える
newPass を空文字 "" で初期化。
for ループで pass の各文字に対して：
"Ö" なら、getRandChar() を使ってランダムな文字に置換。
そうでなければ、そのまま newPass に追加。
replaceÖ("hÖeÖlÖlÖoÖ");  ->  "hXe9l@lQo*"

document.getElementById("generateButton").addEventListener("click", function() {
    var word = document.getElementById("wordInput").value;
    
    var tempPass = addÖ(word);  // Öを追加した途中経過
    document.getElementById("result").textContent = "Step 1: " + tempPass + "\n";  // 途中経過表示
    
    var finalPass = replaceÖ(tempPass);  // 最終パスワード
    setTimeout(function() {  
        document.getElementById("result").textContent += "Step 2: " + finalPass;  // 最終結果表示
    }, 1000);  // 少し待ってから表示（見やすくするため）
});
HTML のボタン (id="generateButton") がクリックされたら、以下の処理を実行：
wordInput の入力値 (word) を取得。
addÖ(word) を実行し、"Ö" を追加した途中経過 (tempPass) を表示。
replaceÖ(tempPass) を実行し、ランダム文字に置き換えたパスワード (finalPass) を生成。
setTimeout を使い 1秒後 に finalPass を表示
hello  -> Step 1: hÖeÖlÖlÖoÖ -> (1秒後) Step 2: h3eFl8l!l@o$
 
*/

