//Q#31:
var userNames = ["Admin", "Taha", "Shaff", "Sarah", "Jasir"];
// Remove all usernames from our array now and our array is empty:
userNames = [];
// If Statements for checking length of our array is empty?
if (userNames.length === 0) {
    console.log("Your Array is empty We need to find some users!");
}
else {
    //If Array is not empty use forEach loop on Array:
    userNames.forEach(function (Username) {
        if (Username === "Admin") {
            console.log("Hello ".concat(Username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(Username, ", thank you for logging in again."));
        }
    });
}
//Q#32:
// Array of Current Users
var current_users = ["Uzair", "shahid", "Momina", "Zoha", "Omi"];
// Array of New Users
var new_users = ["Haris", "Avantika", "Shahid", "Majid", "Momina"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
//Q#33:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log("1st");
    }
    else if (number === 2) {
        console.log("2nd");
    }
    else if (number === 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//Q#34:
var favorite_pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var _a = 0, favorite_pizzas_1 = favorite_pizzas; _a < favorite_pizzas_1.length; _a++) {
    var onepizza = favorite_pizzas_1[_a];
    console.log("I like ".concat(onepizza, " pizza."));
}
console.log("\nI really love pizza!");
//Q#35:
var animals = ["Dog", 'Cat', "Rabbit"];
for (var _b = 0, animals_1 = animals; _b < animals_1.length; _b++) {
    var Animal = animals_1[_b];
    console.log("A ".concat(Animal, " would make a great pet."));
}
console.log("\nAny of these animals would make a great pet!");
//Q#36:
function make_shirt(size, message) {
    console.log("You Selected ".concat(size, " size shirt with \"").concat(message, "\" printed on it."));
}
// Call the function with example arguments
make_shirt("Large", "I love TypeScript");
make_shirt("Medium", "JavaScript is fun!");
make_shirt("Small", "Coding is awesome!");
//Q#37:
function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love IT"; }
    console.log("\nThe shirt size is ".concat(size, " and it has the message: \"").concat(message, "\""));
}
// Making a large shirt with the default message
make_Shirt();
// Making a medium shirt with the default message
make_Shirt("Medium");
// Making a shirt of any size with a different message
make_Shirt("Small", "TypeScript is awesome!");
//Q#38:
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
//Q#39:
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs and print the returned values
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'France'));
//Q#40:
function make_album(artist_Name, albumtitle, tracks) {
    var album = {
        artist: artist_Name,
        title: albumtitle,
    };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return album;
}
// Create three album objects
var album1 = make_album('Taylor Swift', 'Evermore');
var album2 = make_album('Adele', '30');
var album3 = make_album('Coldplay', 'Music of the Spheres', 12);
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
