var Student = {
    Name: "Sana Sheikh",
    age: 22,
    StudentId: "S22013",
    Major: "BBA",
    Year: 2,
    GPA: 3.95,
};
console.log(Student);
//Q#22:
var arrayError = ["A", "B", "C", "D", "E"];
//Produce an index error:
//console.log(arrayError[9]);
//Correct the error:
console.log(arrayError[2]);
//Q#23:
var five = 5;
var ten = 10;
//Test 1:
console.log("\nTest 1: Five is equal to 5?");
console.log(five == 5);
//Test 2:
console.log("\nTest 2: Ten is equal to 10?");
console.log(ten == 10);
//Test 3:
console.log("\nTest 3: Five is not equal to 10?");
console.log(five != 10);
//Test 4:
console.log("\nTest 4: Ten is greater than 5?");
console.log(ten > 5);
//Test 5:
console.log("\nTest 5: Five is less than 10?");
console.log(five < 10);
//Test 6:
console.log("\nTest 6: Ten is less than 5?");
console.log(ten < 5);
//Test 7:
console.log("\nTest 7: Ten is not equal to 10?");
console.log(ten != 10);
//Test 8:
console.log("\nTest 8: Five is greater than 10?");
console.log(five > 10);
//Test 9:
console.log("\nTest 9: Five is equal to 10?");
console.log(five == 10);
//Test 10:
console.log("\nTest 10: Ten is equal to 5?");
console.log(ten == 5);
//Q#24:
//Variables:
var orange = "orange";
var uppercaseOrange = "ORANGE";
var twenty = 20;
var thirty = 30;
var vegetables = ["potato", "tomato", "carrot", "peas"];
//Tests for equality and inequality with strings:
console.log("\nIs orange is equal to orange?");
console.log(orange == "orange");
console.log("\nIs orange is not equal to orange?");
console.log(orange != "orange");
//Tests using the Lowercase function:
console.log("\nIs ORANGE is equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() == "orange");
console.log("\nIs ORANGE is not equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() != "orange");
//Numerical Tests:
//Equality and Inequality:
console.log("\nTwenty is equal to thirty?");
console.log(twenty == 30);
console.log("\nTwenty is not equal to thirty?");
console.log(twenty != 30);
//Greater than and Less than:
console.log("\nTwenty is greater than thirty?");
console.log(twenty > 30);
console.log("\nTwenty is less than thirty?");
console.log(twenty < 30);
//Greater than or Equal to:
console.log("\nThirty is greater than or equal to twenty?");
console.log(thirty >= 20);
//Less than or Equal to:
console.log("\nThirty is less than or equal to twenty?");
console.log(thirty <= 20);
//Tests using "and" and "or" operators:
//using && (AND):
console.log("\nThirty is not equal to 20 AND Thirty is greater than 20?");
console.log(thirty != 20 && thirty > 20);
console.log("\nThirty is not equal to 20 AND Twenty is greater than 30?");
console.log(thirty != 20 && twenty > 30);
//using || (or):
console.log("\nTwenty is greater than 30 OR Twenty is equal to 20");
console.log(twenty > 30 || twenty == 20);
console.log("\nTwenty is greater than 30 OR Twenty is not equal to 20");
console.log(twenty > 30 || twenty != 20);
//Test whether an item is include in array:
console.log("\nIs tomato include in my vegetables array");
console.log(vegetables.includes("tomato"));
//Test whether an item is not include in array:
console.log("\nIs tomato not include in my vegetables array");
console.log(!vegetables.includes("tomato"));
//Q#25:
var alienColor = 'yellow';
if (alienColor === "yellow") {
    console.log("The player just earned 5 points!");
}
if (alienColor === "red") {
    console.log("Alien color is red");
}
//Q#26:
var alienColour = "green";
//First Version:
if (alienColour === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//Secondversion:
if (alienColour === "blue") {
    console.log("I'm come from If statement.");
}
else {
    console.log("I'm come from Else statement.");
}
//Q#27:
var alienColor1 = "green";
//using If & Else if statements:
if (alienColor1 === "green") {
    console.log("(Version 1) You shot down green alien you have earned 5 points.");
}
else if (alienColor1 === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if (alienColor1 === "red") {
    console.log("You shot down red alien you have earned 15 points.");
}
//Version 2:
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("You shot down green alien you have earned 5 points.");
}
else if (alienColor2 === "yellow") {
    console.log("(Version 2) You shot down yellow alien you have earned 10 points.");
}
else if (alienColor2 === "red") {
    console.log("You shot down red alien you have earned 15 points.");
}
//Version 3:
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("You shot down green alien you have earned 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if (alienColor3 === "red") {
    console.log("(Version 3) You shot down red alien you have earned 15 points.");
}
//Q#28:
var age = 21;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
//Q#29:
var favorite_fruits = ['apple', 'banana', 'mango'];
//Series of independent if statements:
if (favorite_fruits.includes('apple')) {
    console.log("I really like apples!");
}
if (favorite_fruits.includes('grape')) {
    console.log("I really like grapes!");
}
if (favorite_fruits.includes('banana')) {
    console.log("I really like bananas!");
}
if (favorite_fruits.includes('mango')) {
    console.log("I really like mangoes!");
}
if (favorite_fruits.includes('orange')) {
    console.log("I really like oranges!");
}
//Q#30:
var userNames = ["Admin", "Taha", "Shaff", "Sarah", "Jasir"];
//Using forEach Loop on Array:
userNames.forEach(function (Username) {
    if (Username === "Admin") {
        console.log("Hello ".concat(Username, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(Username, ", thank you for logging in again."));
    }
});
