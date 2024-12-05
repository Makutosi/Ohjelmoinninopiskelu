// Sort three numbers in ascending order

function sortNumbers() {
    var num1 = parseInt(document.getElementById('first').value);
    var num2 = parseInt(document.getElementById('second').value);
    var num3 = parseInt(document.getElementById('third').value);
  
    var numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);
  
    document.getElementById('result').innerHTML = "The sorted order: " + numbers.join(', ');
  }
  
  /* 
  sort メソッド numbers.sort((a, b) => a - b)  配列 numbers の要素を**昇順（小さい順）**に並べ替える
  JavaScriptではデフォルトで「文字列」として比較を行うため、数値を正しく並べ替えるには比較関数を指定する必要がある
  比較関数 (a, b) => a - b
    a と b は配列内の要素のペア。
    a - b の結果によって順序が決まる:
    a - b が負（例: 2 - 5 = -3）の場合: a が b より小さいので、a が先に来る。
    a - b が正（例: 5 - 2 = 3）の場合: b が a より小さいので、b が先に来る。
    a - b が 0 の場合: a と b の順序を変更しない（同じ値とみなされる）。

 numbers.join(' ')
    join メソッドは、配列のすべての要素を結合し、文字列として返す。
    括弧内に文字列を指定すると、その文字列が要素間に挿入される
    空欄の場合（例: numbers.join()）、カンマ , がデフォルトで使われる
  */