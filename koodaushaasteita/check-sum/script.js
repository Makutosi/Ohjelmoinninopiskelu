/*Make a function that takes two values ​​and 
if their sum is less than 100, the function would print the text "The sum of the numbers is less than 100" to the console. 
Otherwise, the function would print "The numbers are too large to calculate!"*/

function checkSum (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide two valid numbers.");
        return;
    }

    const sum = a + b;
    if (sum < 100) {
        console.log("The sum of the numbers is less than 100");
    } else {
        console.log("The numbers are too large to calculate!");
    }
}

checkSum(45, 50);　// The sum of the numbers is less than 100

checkSum(78, 80); // The numbers are too large to calculate!

checkSum(-1, 0); // The sum of the numbers is less than 100

checkSum(0.123, ); // Please provide two valid numbers.

/*
function checkSum (a, b)
1. functionで関数を定義
関数名をcheckSumとし、引数として2つの値（aとb）を受け取ります。

2. 引数が正しく渡されなかった場合のエラーハンドリング
typeof a !== "number" || typeof b !== "number -> aかbのどちらかが数値でない場合にtrue

typeofは、変数や値のデータ型（型）を文字列として返す演算子
console.log(typeof 42);         // "number"（数値型）
console.log(typeof "hello");    // "string"（文字列型）
console.log(typeof true);       // "boolean"（論理型）
console.log(typeof undefined);  // "undefined"（未定義）
console.log(typeof null);       // "object"（歴史的な理由でこう表示される）

!==は「型と値が一致しない」という意味の「厳密な不等号」
console.log(5 !== 5);     // false（5は5と等しい）
console.log(5 !== "5");   // true（5と文字列"5"は異なる型）
console.log(5 !== 10);    // true（値が異なる）

function check(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("どちらかの値が数値ではありません！");
  } else {
    console.log("両方とも数値です！");
  }
}

check(10, 20);          // 両方とも数値です！
check(10, "hello");     // どちらかの値が数値ではありません！
check("test", null);    // どちらかの値が数値ではありません！
check(undefined, 5);    // どちらかの値が数値ではありません！

3. aとbを足してsumに代入
const sum = a + b;の部分で、aとbの合計を変数sumに保存

4. 条件分岐で結果を判定
if (sum < 100)で、合計が100未満の場合の条件をチェック。
条件が成立した場合、console.logでメッセージを表示 The sum of the numbers is less than 100
条件が成立しない場合（合計が100以上）、elseで別のメッセージを表示 The numbers are too large to calculate!

5. 関数の呼び出し checkSum(45, 50);
実際に数値を渡して関数を呼び出し、結果を確認

*/
