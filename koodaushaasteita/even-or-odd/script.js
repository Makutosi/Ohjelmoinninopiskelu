/* Write a function that tells whether a given number is even or odd. For example, 146 is even.*/

function isEvenOrOdd(input) {
    // 入力が空の場合
    if (input === "") {
        return "Input cannot be empty.";
    }

    // 数値に変換
    var number = parseFloat(input);

    // 数値に変換できない場合
    if (isNaN(number)) {
        return "Input must be a valid number.";
    }

    // 小数点を含む場合
    if (number % 1 !== 0) {
        return "Input must be an integer.";
    }

    // 0の場合
    if (number === 0) {
        return "0 is even.";
    }

     // 偶数・奇数を判定
    if (number % 2 === 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}

console.log(isEvenOrOdd(146)); // 146 is even.
console.log(isEvenOrOdd(-35)); // -35 is odd.
console.log(isEvenOrOdd(0)); // 0 is even.
console.log(isEvenOrOdd("")); // Input cannot be empty.
console.log(isEvenOrOdd("hello")); // Input must be a valid number.
console.log(isEvenOrOdd(3.14)); // Input must be an integer.

/* 
==（等価演算子） 型が異なる場合、自動的に型を変換して比較
console.log(0 == "0"); // true（文字列 "0" が数値 0 に変換される）
console.log(1 == true); // true（true が数値 1 に変換される）

===（厳密等価演算子） 型の変換をせず、型と値の両方が同じ場合にのみtrueを返す
console.log(0 === "0"); // false（型が異なるため）
console.log(1 === true); // false（型が異なるため）
*/

