/* Write a function that returns the name of the month when you give it the month number. 
For example, month(8)  August.*/

function month(number) {
    var monthName; // ここで宣言
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
 関数monthを定義し、引数として月番号numberを受け取る。
　switch文を使い、各月番号に対応する月名を設定。
　月番号が1～12以外の場合は、"Invalid month number"を返す。
　関数の最後に月名をreturnします。

var で宣言された変数はその変数が属する 関数スコープ または グローバルスコープ に属す
そのため、monthName を関数内でどのケースでも使えるようにするため、switch 文の外側で宣言している。

もし monthName を switch 文の中だけで宣言してしまうと、以下のように return 文で利用できなくなる
function month(number) {
  switch (number) {
    case 1:
      var monthName = "January"; // ここで宣言
      break;
    default:
      monthName = "Invalid month number";
  }
  return monthName; // monthName is not defined（エラー）
}

const を使う場合、各 case ブロック内で値を定義し、return でその値を返す
function month(number) {
  switch (number) {
    case 1: {
      const monthName = "January";
      return monthName;
    }
    case 2: {
      const monthName = "February";
      return monthName;
    }
*/ 

/*
簡潔な書き方 return 文で直接値を返す
function month(number) {
    switch (number) {
      case 1: return "January";
      case 2: return "February";
      case 3: return "March";
      case 4: return "April";
      case 5: return "May";
      case 6: return "June";
      case 7: return "July";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
      default: return "Invalid month number";
    }
  }

  console.log(month(4)); // April
  console.log(month(16)); // Invalid month number
  */