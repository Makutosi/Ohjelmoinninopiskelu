/* 
Write a function that automatically grades students' exams as follows:
< 50 Failed
< 60 T1
< 70 T2
< 80 H3
< 90 H4
< 100 K5
Then print the following results with the function: grade(Daniel, 80)
Daniel got 80 points on the exam --> Daniel H4 (the part after the arrow is printed)
Viivi got 77 points on the exam --> Viivi H3 
Tiina H4,  Ismael K5, Tuomas T2*/

function grade(name, score) {
    if (typeof name !== "string" || typeof score !== "number") {
        console.log("Invalid input: name should be a string, and score should be a number.");
        return;
      }

    var result;

    if (score < 50) {
        result = "Failed";
    } else if (score < 60) {
        result = "T1";
    } else if (score < 70) {
        result = "T2";
    } else if (score < 80) {
        result = "H3";
    } else if (score < 90) {
        result = "H4";
    } else if (score < 100) {
        result = "K5";
    } else {
        result = "Invalid score";
    }

    console.log(name + " " + result);
}

grade("Daniel", 80); // Daniel H4
grade("Viivi", 77); // Viivi H3
grade("Tiina", 88); // Tiina H4
grade("Ismael", 95); // Ismael K5
grade("Tuomas", 68); // Tuomas T2
grade("Mimi", 139); // Mimi Invalid score
grade(80, "Daniel");  //  Invalid input: name should be a string, and score should be a number.   
grade("Viivi", "77");     
grade(null, undefined);  

/* 
function grade(name, score) {  関数の定義
関数は複数の引数を受け取ることができます (name, score)
引数 (Arguments): 関数を呼び出すときに、外部から値を渡すために使います

if (typeof name !== "string" || typeof score !== "number") 
「引数の型が正しいかどうか」を確認し、不正な入力があればエラーメッセージを表示するため
typeof: 変数や値の型を確認するためのJavaScriptの演算子
typeof name !== "string" 等しくないを表す比較演算子  name の型が "string" でない場合に true
typeof score !== "number" score の型が "number" でない場合に true
if 文全体 
name が文字列ではないまたは score が数値ではない場合」にエラーメッセージを表示し、関数の実行を終了 (return) 

var result; 評価を保存するための変数を準備している部分
var は変数を宣言するキーワード
条件分岐を使って、点数に応じた結果をこの変数に代入
最後にこの変数を使って、学生の名前、点数、評価を表示

else { result = "Invalid score"; } 予期しない入力に対応する
grade("Daniel", 105); // Invalid score*/