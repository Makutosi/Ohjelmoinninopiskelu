/*Make a function that takes two values ​​and 
if their sum is less than 100, the function would print the text "The sum of the numbers is less than 100" to the console. 
Otherwise, the function would print "The numbers are too large to calculate!"*/

function checkSum (a, b) {
    const sum = a + b;
    if (sum < 100) {
        console.log("The sum of the numbers is less than 100");
    } else {
        console.log("The numbers are too large to calculate!");
    }
}

// The sum of the numbers is less than 100
checkSum(45, 50);　// The sum of the numbers is less than 100
checkSum(78, 80); // The numbers are too large to calculate!

checkSum(-1, 0); // The sum of the numbers is less than 100

checkSum(0.123, ); // The numbers are too large to calculate! ?