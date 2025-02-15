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

*/

