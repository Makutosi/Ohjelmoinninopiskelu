/* Enter the year and check if it is a leap year. */

document.getElementById("checkButton").addEventListener("click", function () {
    var year = document.getElementById("yearInput").value;
    var resultText = "";
  
    if (year === "") {
      resultText = "Please enter a year.";
    } else {
      year = parseInt(year, 10);
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultText = year + " is a leap year.";
      } else {
        resultText = year + " is not a leap year.";
      }
    }
  
    document.getElementById("result").textContent = resultText;
  });
  