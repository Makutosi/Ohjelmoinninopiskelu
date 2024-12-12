// Find the largest of five numbers

function largestNumber() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);
    var num4 = parseInt(document.getElementById('num4').value);
    var num5 = parseInt(document.getElementById('num5').value);

    var largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    if (num4 > largest) {
        largest = num4;
    }
    if (num5 > largest) {
        largest = num5;
    }

    // Result output
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Five numbers: " 
    + num1 + ', ' + num2 + ', ' + num3 + ', ' + num4 + ', ' + num5 + "<br>Largest number: " + largest;
}

/*　largestを使わずに、最初にnum1を仮の最大値として設定し、その後に他の数値と比較して最も大きな値を決定する。
比較は単純にif文を使って行い、largestにその時点での最大値を格納。
後の数値がそのlargestより大きければ、largestをその数値に更新。すべての数値を順番にチェックし、
最終的に最大の値がlargestに残る仕組み。

もしelse ifを使った場合、条件が真の場合、他の条件を無視して次の条件をチェックしないことになるるが、
ここではすべての条件を独立して評価しているため、else ifは必要無い無い。すべてのif文が順番に評価され、最大値が決まる。

else ifを使うのは、複数の条件のうち1つだけを実行したい場合に有効で、このケースではすべての数値を比較するので、
ifを使うほうが自然。*/