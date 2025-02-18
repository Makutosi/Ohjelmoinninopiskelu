/* Enter a Scrabble word and the program will calculate the points for each letter */

function calculateScore() {
    var word = document.getElementById("word").value.trim().replace(/\s+/g, ""); // すべてのスペースを削除
    if (word === "") {
        document.getElementById("result").innerHTML = "Please enter a word.";
        return;
    }
    
    word = word.toUpperCase(); // すべて大文字に変換
    var score = 0;
    
    // 英字のみチェック（A-Z, Ä, Ö, Ü）
    if (!/^[A-ZÄÖÜ]+$/.test(word)) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter only letters (A-Z, Ä, Ö, Ü).";
        return;
    }

    for (var i = 0; i < word.length; i++) {
        var letter = word[i];

        switch (letter) {
            case 'A': case 'E': case 'I': case 'O': case 'U':
                score += 1;
                break;
            case 'S': case 'C': case 'R': case 'B': case 'L':
                score += 2;
                break;
            case 'Ä': case 'Ö': case 'Ü':
                score += 5;
                break;
            case 'X': case 'Y': case 'Z': case 'W':
                score += 8;
                break;
            case 'K': case 'G': case 'P':
                score += 10;
                break;
            default:
                score += 3;
        }
    }

    document.getElementById("result").innerHTML = "The word '" + word + "' Total Score: " + score + ".";
}


