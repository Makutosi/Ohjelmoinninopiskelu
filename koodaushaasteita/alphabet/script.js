/* Write a function that prints the letters of a given word in alphabetical order. 
For example, alphabet(”webmaster”)  abeemrstw. 
It helps here if you convert the text into an array variable using the command Array.from(variable); 
However, remember to store it in a variable so that you can manipulate it. 
And think about how you can print it afterwards.
*/

function alphabet(word) {
    // 文字列を配列に変換
    var letters = Array.from(word);

    // 配列をアルファベット順に並び替え
    letters.sort();

    // 並び替えた配列を文字列に戻す
    var sortedWord = letters.join('');

    // 結果を表示
    console.log(sortedWord);
}

// 使用例
alphabet("webmaster"); // abeemrstw

/* 
関数定義 function alphabet(word) { 
alphabetという名前の関数を作成し、引数としてword（単語）を受け取り

Array.from()で文字列を配列に変換 var letters = Array.from(word);
文字列を1文字ずつ分解し、配列に変換
['w', 'e', 'b', 'm', 'a', 's', 't', 'e', 'r']
これにより、各文字を個別に操作できるようになります

sort() 配列を昇順（小さいものから大きいもの）に並び替えるメソッド 
letters.sort();
-> ['a', 'b', 'e', 'e', 'm', 'r', 's', 't', 'w']
注意点: sort()は元の配列を変更します（新しい配列を作るのではありません）

join()で配列を文字列に戻す
var sortedWord = letters.join('');
join('') は、配列の要素を1つの文字列に結合します。
引数として空文字列（''）を渡すことで、文字の間に余分なスペースを入れずに結合します。
例: ['a', 'b', 'e', 'e', 'm', 'r', 's', 't', 'w'] は、次のような文字列になります:
-> "abeemrstw"

console.log() を使用して、並び替えられた文字列を画面（コンソール）に表示
console.log(sortedWord);

この関数を実行すると、次のような出力が
alphabet("webmaster"); // abeemrstw
*/