/* Basic arithmetic calculator */

var display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    // 数字と演算子以外の文字が入っていないかチェック
    if (!/^[0-9+\-*/%.]+$/.test(display.value)) {
        display.value = "Error";
        return;
    }
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

/* 
function calculateResult() { ユーザーが = ボタンを押したときに、入力された計算式を評価して結果を表示する

/.../ で囲まれている部分は「正規表現リテラル（Regular Expression Literal）」
[ ] 「文字クラス（Character Class）」
^（行の先頭）と $（行の末尾）を含んでいるので、「完全一致の正規表現（Exact Match Regular Expression）」 

.test() JavaScript の 正規表現オブジェクトのメソッド 
「文字列が正規表現のルールに合っているかを判定する」 ための関数
✅ マッチすれば true
❌ マッチしなければ false

try...catch を使うと、エラーをキャッチして、プログラムを止めずに安全に処理できる
try {
    let result = 10 / 0; // 0で割る → JavaScript では Infinity
    console.log(result); // Infinity が出る
} catch (error) {
    console.log("Error!");
}
    
try {
    let result = eval("2++3"); // 間違った式 → エラー
    console.log(result);
} catch (error) {
    console.log("Error!"); // ここにくる
}*/