/* 
Write a function that automatically grades students' exams as follows:
< 50 Failed
< 60 T1
< 70 T2
< 80 H3
< 90 H4
< 100 K5
Then print the following results with the function: grade(Daniel, 80)
Daniel got 80 points on the exam --> Daniel H4 (the part after the arrow is printed)
Viivi got 77 points on the exam --> Viivi H3 
Tiina H4,  Ismael K5, Tuomas T2*/

function grade(name, score) {
    var result;

    if (score < 50) {
        result = "Failed";
    } else if (score < 60) {
        result = "T1";
    } else if (score < 70) {
        result = "T2";
    } else if (score < 80) {
        result = "H3";
    } else if (score < 90) {
        result = "H4";
    } else if (score < 100) {
        result = "K5";
    } else {
        result = "Invalid score";
    }

    console.log(name + " " + result);
}

grade("Daniel", 80);
grade("Viivi", 77);
grade("Tiina", 88);
grade("Ismael", 95);
grade("Tuomas", 68);

