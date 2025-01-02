/* Make a function that adds two numbers together and prints the result to the console. 
The call is as follows: addTotal(2, 3); */

// Function to add two numbers and print the result
function addTotal(number1, number2) {
    const result = number1 + number2;
    console.log(result);
}

// Call the function with two numbers
addTotal(2, 3); // 5

/* 
function addTotal(number1, number2)で、addTotalという関数を定義
この関数は2つの引数を受け取ります（number1とnumber2）
関数内で、number1 + number2を計算し、その結果をresultという変数に代入
console.log(result)を使って計算結果をコンソールに出力
addTotal(2, 3);で、関数に引数として2と3を渡して実行
結果として、コンソールには5と表示*/