/* The user can freely specify a range and calculate the total within that range */

function calculateRangeSum() {
    // ユーザー入力を取得
    var start = document.getElementById("startNumber").value;
    var end = document.getElementById("endNumber").value;

    // 入力チェック: 小数、空欄、エラーを排除
    if (!isInteger(start) || !isInteger(end)) {
        document.getElementById("numberOutput").textContent = 
            "Please enter valid integers only.";
        return;
    }

    start = parseInt(start, 10);
    end = parseInt(end, 10);

    // 開始値と終了値の比較
    if (start > end) {
        document.getElementById("numberOutput").textContent = 
            "End number must be greater than Start number.";
        return;
    }

    // 合計を計算
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
    }

    // 結果を表示
    document.getElementById("numberOutput").textContent = 
        "The sum of numbers from " + start + " to " + end + " is: " + sum;
}

// 整数チェック関数
function isInteger(value) {
    var num = Number(value);
    return Number.isInteger(num);
}

/* 
step="1"  <input type="number"> の属性の一つで、入力できる数値の「ステップ幅」を指定する
「数値が1ずつ増減する」という意味

<input type="number" id="startNumber" step="1" placeholder="Enter start number">
ユーザーは整数のみ入力でき、増減ボタンで1ずつ増減できます。
入力フィールドでは 1, 2, 3, ... という整数が選択肢になります。
もし step 属性を設定しなければ、ブラウザは通常、ユーザーが自由に小数点以下を入力できるようにする
入力値が整数のみを許可したい場合には、step="1" を使うのが便利*/
