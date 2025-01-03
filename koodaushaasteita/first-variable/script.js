/* Make a function that prints the first value of an array variable 
that you have entered beforehand. 
For example, if the array variable is [34, 566, 71, 89], 
the function call firstVariable() would print 34 to the console.*/

// Declare the array first
const myArray = [34, 566, 71, 89];

// Function definition
function firstVariable(array) {
    // Print the first value of the array to the console
    console.log(array[0]);
}

// Call the function after defining it
firstVariable(myArray); // 34

/* 
配列を用意（例: myArray）
変数や配列の宣言は関数定義よりも前に記述することができる

関数firstVariableの定義
この関数は引数としてarray（配列）を受け取り
console.log() 配列の最初の要素をコンソールに出力

firstVariable()関数を呼び出す際にその配列を渡す
関数を呼び出す際は、関数がすでに定義されている必要があります
*/

/* 
データの処理
リストの先頭データの確認
const taskList = ["Write a report", "Prepare slides", "Call the client"];

function firstVariable(array) {
    console.log(array[0]);
}

firstVariable(taskList); // This will print: "Write a report"

taskListという配列を定義し、タスクを文字列として並べ
firstVariableは、引数arrayを受け取り、その最初の要素（array[0]）をコンソールに出力する関数
配列taskListをfirstVariableに渡して、タスクリストの最初のタスク（"Write a report"）を出力
*/

/*
最初のデータのチェック
配列のデータが正しく生成されているか、最初の要素を確認することで、デバッグを簡単にします

const debugData = [101, 202, 303];
firstVariable(debugData); // Debugging output: 101
*/

/*
ユーザーインターフェース
Webアプリやモバイルアプリで、ユーザーが複数のオプションを入力したときに、最初の選択肢を提示する場合。

const userSelections = ["Pizza", "Burger", "Sushi"];
firstVariable(userSelections); // Prints: "Pizza"
*/

/*
プレイヤーのターン
ゲームで複数のプレイヤーが順番待ちしている際に、次に行動するプレイヤーを確認するため。

const playerQueue = ["Player1", "Player2", "Player3"];
firstVariable(playerQueue); // Prints: "Player1"
*/