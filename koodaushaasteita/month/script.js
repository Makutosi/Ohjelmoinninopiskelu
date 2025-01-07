/* Write a function that returns the name of the month when you give it the month number. 
For example, month(8)  August.*/

function month(number) {
    var monthName;
    switch (number) {
        case 1:
            monthName = "January";
            break;

        case 2:
            monthName = "February";
            break;

        case 3:
            monthName = "March";
            break;

        case 4:
            monthName = "April";
            break;

        case 5:
            monthName = "May";
            break;

        case 6:
            monthName = "June";
            break;

        case 7:
            monthName = "July";
            break;

        case 8:
            monthName = "August";
            break;

        case 9:
            monthName = "September";
            break;

        case 10:
            monthName = "October";
            break;

        case 11:
            monthName = "November";
            break;

        case 12:
            monthName = "December";
            break;

        default:
            monthName = "Invalid month number";
    }
    return monthName;
}

console.log(month(8)); // August
console.log(month(13)); // Invalid month number
 /*
 関数monthを定義し、引数として月番号numberを受け取るる。
　switch文を使い、各月番号に対応する月名を設定。
　月番号が1～12以外の場合は、"Invalid month number"を返す。
　関数の最後に月名をreturnします。
*/ 