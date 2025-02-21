/* Make a "contact_us" page and make a form there where you ask all sorts of questions */

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        var name = document.getElementById("name").value.trim();
        var age = document.getElementById("age").value.trim();
        var job = document.getElementById("job").value;
        var languages = document.querySelectorAll("input[name='language']:checked");
        var message = document.getElementById("message").value.trim();

        if (name === "" || age === "" || job === "" || languages.length === 0 || message === "") {
            alert("All fields must be filled out.");
            event.preventDefault();
        }
    });
});

/* 
（validation）フォームの入力内容をチェックし、適切なデータが入力されているかを確認する処理のこと
すべての項目が入力されているか をチェックし、足りない場合は アラート（警告） を出してフォームの送信を防ぎます
バリデーションがないと、未入力のままフォームが送信されてしまい、サーバー側でエラーが発生する可能性があります。
そのため、事前にクライアント側（ブラウザ）でチェックする のが重要 */