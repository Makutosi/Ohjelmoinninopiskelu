/* Calculates the number of days a person has lived since a given date of birth. */

function calculateDaysOld(birthYear, birthMonth, birthDay) {
    // Get the current date
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; // Months are 0-based, so add 1
    var currentDay = today.getDate();
  
    // Array representing cumulative days at the end of each month, starting from index 1
    var daysAtEndOfMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  
    // Calculate the number of days from January 1st to the birthday in the birth year
    var birthDaysThisYear = daysAtEndOfMonth[birthMonth] + birthDay;
  
    // Calculate the number of days from January 1st to today in the current year
    var currentDaysThisYear = daysAtEndOfMonth[currentMonth] + currentDay;
  
    // Calculate the number of years between the birth year and the current year
    var yearsDifference = currentYear - birthYear;
  
    // Calculate the total number of days lived
    var totalDays = (yearsDifference * 365.25) + (currentDaysThisYear - birthDaysThisYear);
  
    // Convert the result to an integer and return it
    return Math.floor(totalDays);
  }
  
  // Example usage
  var daysOld = calculateDaysOld(2000, 1, 1); // Born on January 1, 2000
  console.log("You have lived for " + daysOld + " days.");
  