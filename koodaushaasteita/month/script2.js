/* 月の名前を配列に格納し、インデックスでアクセスする方法 */

function month(number) {
    var months = [
        "Invalid month number", // 0番目の要素は無効な番号用
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    return months[number] || "Invalid month number";
}

console.log(month(9)); // September
console.log(month(0)); // Invalid month number

/* 
配列monthsの1番目から12番目の要素に月名を格納。
無効な月番号（例えば0や13など）に対しては、配列の範囲外アクセスになるため、
デフォルトで"Invalid month number"を返す。
*/