/* Write a program that asks the user for an even number
and then prints all even numbers up to that point excluding 0*/ 

function showEvenNumbers() {
    var input = document.getElementById("evenNumber").value;
    var resultElement = document.getElementById("result");
    var number = parseInt(input);
    
    if (isNaN(number) || number <= 0 || number % 2 !== 0) {
        resultElement.innerHTML = "Please enter a positive even number.";
        return;
    }

    var resultText = "";
    for (var i = 2; i <= number; i += 2) {
        resultText += i + " ";
    }

    resultElement.innerHTML = resultText;
}

/* 
HTML
<input type="number" id="evenNumber">: 入力フィールド
id="evenNumber" この入力フィールドをJavaScriptで参照するための識別子
<button onclick="showEvenNumbers()">Show</button>: このボタンをクリックすると、showEvenNumbers() 関数が実行

showEvenNumbers() 関数 ユーザーが入力した偶数までの偶数リストを生成し、表示
function showEvenNumbers() {
    var input = document.getElementById("evenNumber").value;
    var resultElement = document.getElementById("result");
    var number = parseInt(input);
document.getElementById("evenNumber") HTMLで指定した id="evenNumber" を持つ入力フィールドを参照
.value はその入力フィールドにユーザーが入力した値を取得。値は文字列形式

var resultElement = document.getElementById("result");:
id="result" を持つ <p> 要素を参照し、この後に結果を表示するために使う

var number = parseInt(input);:　parseInt(input) は、入力された文字列を整数に変換

if (isNaN(number) || number <= 0 || number % 2 !== 0) {
    resultElement.innerHTML = "Please enter a positive even number.";
    return;
}
isNaN(number):　isNaN() は引数が "Not-a-Number"（数値でない）かどうかをチェックする関数
                入力が数値でない場合（例えば、文字や空欄など）、true を返す
                もし number が数値でない場合は、エラーメッセージを表示して関数を終了
number <= 0:　ユーザーが入力した数が 0 以下（負の数やゼロ）だった場合、エラーメッセージを表示
number % 2 !== 0:　% は余りを求める演算子です。
                    偶数の数字は 2 で割り切れるので、number % 2 !== 0 は入力された数が偶数でない場合に true 
resultElement.innerHTML = "Please enter a positive even number.";:　入力が不正な場合、resultElement にエラーメッセージを表示
return;:　入力が不正な場合は、それ以降の処理を実行せずに関数を終了

入力が有効な偶数の場合、偶数リストを作成して表示
 var resultText = "";
    for (var i = 2; i <= number; i += 2) {
        resultText += i + " ";
    }
var resultText = "";:resultText という変数を空の文字列で初期化。この変数は、結果を表示するために使う。

for (var i = 2; i <= number; i += 2):　for ループは、i を 2 からスタートさせ、i が number 以下である間、i を 2 増加させながら繰り返す。
これにより、2, 4, 6, 8, ... の偶数を順番に処理

resultText += i + " ";:resultText に、現在の i の値（偶数）を追加
                      + " " は、数字の後にスペースを追加するため。これにより、結果が見やすく表示

resultElement.innerHTML = resultText;　最後に、生成された偶数リスト（resultText）を resultElement に表示。
　　　　　　　　　　　　　　　　　　　　　　ここで、innerHTML を使って、<p> 要素に結果を挿入                     */