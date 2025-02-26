/* Lomake B */

document.getElementById("survey-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        event.preventDefault();
        return false;
    }

    if (!emailIsValid(email)) {
        alert("Enter your correct email address.");
        document.getElementById("email").focus();
        event.preventDefault();
        return false;
    }

    if (isNaN(age) || age < 18 || age > 100) {
        alert("Age must be a number between 18 and 100.");
        document.getElementById("age").focus();
        event.preventDefault();
        return false;
    }
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
