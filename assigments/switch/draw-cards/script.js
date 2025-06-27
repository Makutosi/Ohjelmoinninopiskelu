/* The program shuffles a deck of cards and draws five cards, when I press a button, it prints five cards. */

function drawCards() {
    let output = ""; // カードを5枚引いて、その結果を文字列として保存する変数, 初めは空の文字列として宣言
    let suit = ""; // スート（マーク）を保存する変数
    let number = 0; // カードの番号（1〜13）を保存する変数

    // 5枚のカードをランダムに引く
    for (let i = 1; i <= 5; i++) {
        let suitIndex = Math.floor(Math.random() * 4) + 1; // 1〜4のランダムな整数
        number = Math.floor(Math.random() * 13) + 1; // 1〜13のランダムな整数（カードの番号）

        // スートの設定
        switch (suitIndex) {
            case 1:
                suit = '<span class="heart">&#9825;</span>'; // ハート（♥）
                break;
            case 2:
                suit = '<span class="diamond">&#9826;</span>'; // ダイヤ（♦）
                break;
            case 3:
                suit = '<span class="club">&#9827;</span>'; // クラブ（♣）
                break;
            case 4:
                suit = '<span class="spade">&#9828;</span>'; // スペード（♠）
                break;
        }

        // 出力にスートと番号を追加
        output += suit + number + " ";
    }

    // 最終的な結果をHTMLに表示
    document.getElementById("cards").innerHTML = output;
}

/* 
drawCards()関数では、5枚のカードをランダムに生成して、
スート（ハート、ダイヤ、クラブ、スペード）と番号（1〜13）をランダムで決めます。
各カードはHTMLのinnerHTMLを使って表示

let number = 0; → 変数の宣言時にデフォルト値を設定し、未定義を避けるため

for (let i = 1; i <= 5; i++) → 5回カードを引くためのループ
・let i = 1;　ループ変数 i を 1 で初期化　i はカードを何回引いたかをカウントする役割
・i <= 5;　i が 5以下の間 ループを実行する（つまり5回繰り返す）
・ループが1回実行されるごとに i を1増やす（インクリメント）

let suitIndex = Math.floor(Math.random() * 4) + 1; → 1〜4のランダムな数を生成し、スート（マーク）を決定するため
・Math.random() は 0以上1未満 の小数を生成（例: 0.327, 0.849 など）
・Math.random() * 4 は 0以上4未満 の小数を生成（例: 0.5, 3.2 など）
・Math.floor(...) によって 小数点以下を切り捨て（例: 0.5 → 0, 3.2 → 3）
・+1 することで 1〜4の範囲 に調整（例: 0→1, 3→4）
こうして suitIndex は 1, 2, 3, 4 のいずれかの値をとり、これを switch 文でハート・ダイヤ・クラブ・スペードに対応させる

number = Math.floor(Math.random() * 13) + 1; → 1〜13のランダムなカード番号を取得するため
Math.random() → 0以上1未満 の小数
Math.random() * 13 → 0以上13未満 の小数
Math.floor(...) → 小数点以下を切り捨て（0 から 12 の整数）
+1 することで 1 から 13 に変換
この結果、カードの番号（1〜13） をランダムに取得できる

<span class="heart">&#9825;</span>; → <span> タグでスートを表示し、CSSでスタイルを適用するため
色を赤くしたり、フォントサイズを大きくする ことができる
.heart {
    color: red;
    font-size: 24px;
}
HTMLエンティティ（特殊文字）
&#9825;　白抜きのハート（♡）
&#9826; → ダイヤ（♢）
&#9827; → クラブ（♣）
&#9828; → スペード（♠）
*/

