/* Modify the password puzzle so that it draws the letter Ö instead of Ö. */

function getRandChar() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return chars[Math.floor(Math.random() * chars.length)];
}

function addÖ(word) {
    var pass = "";
    for (var i = 0; i < word.length; i++) {
        pass += word[i];  
        pass += "Ö";  
    }
    return pass;
}

function replaceÖ(pass) {
    var newPass = "";
    for (var i = 0; i < pass.length; i++) {
        newPass += (pass[i] === "Ö") ? getRandChar() : pass[i];
    }
    return newPass;
}

document.getElementById("generateButton").addEventListener("click", function() {
    var word = document.getElementById("wordInput").value;
    
    var tempPass = addÖ(word);  // Öを追加した途中経過
    document.getElementById("result").textContent = "Step 1: " + tempPass + "\n";  // 途中経過表示
    
    var finalPass = replaceÖ(tempPass);  // 最終パスワード
    setTimeout(function() {  
        document.getElementById("result").textContent += "Step 2: " + finalPass;  // 最終結果表示
    }, 1000);  // 少し待ってから表示（見やすくするため）
});



