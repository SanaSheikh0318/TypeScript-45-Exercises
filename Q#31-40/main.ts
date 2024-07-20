//Q#31:
let userNames = ["Admin","Taha","Shaff","Sarah","Jasir"];

// Remove all usernames from our array now and our array is empty:
userNames = [];

// If Statements for checking length of our array is empty?
if (userNames.length === 0) {
    console.log("Your Array is empty We need to find some users!");
} else {   
    //If Array is not empty use forEach loop on Array:
    userNames.forEach(Username =>{
        if (Username === "Admin") {
            console.log(`Hello ${Username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${Username}, thank you for logging in again.`);
        }
    })
}

//Q#32:

// Array of Current Users
let current_users = ["Uzair", "shahid", "Momina", "Zoha", "Omi"]

// Array of New Users
let new_users = ["Haris", "Avantika", "Shahid", "Majid", "Momina"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different messages using If-Else statements
    if(our_condition) {
    console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
    console.log(`This Username ${new_one_user} is available`)
    }
})

//Q#33:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log("1st");
    } else if (number === 2) {
        console.log("2nd");
    } else if (number === 3) {
        console.log("3rd");
    } else {
        console.log(`${number}th`);
    }
}

//Q#34:
let favorite_pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let onepizza of favorite_pizzas) {
    console.log(`I like ${onepizza} pizza.`);
}

console.log("\nI really love pizza!");

//Q#35:
let animals = ["Dog", 'Cat', "Rabbit"];

for (let Animal of animals) {
    console.log(`A ${Animal} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");

//Q#36:
function make_shirt(size: string, message: string) {
    console.log(`You Selected ${size} size shirt with "${message}" printed on it.`);
}

// Call the function with example arguments
make_shirt("Large", "I love TypeScript");
make_shirt("Medium", "JavaScript is fun!");
make_shirt("Small", "Coding is awesome!");

//Q#37:
function make_Shirt(size: string = "Large", message: string = "I love IT") {
    console.log(`\nThe shirt size is ${size} and it has the message: "${message}"`);
}

// Making a large shirt with the default message
make_Shirt();

// Making a medium shirt with the default message
make_Shirt("Medium");

// Making a shirt of any size with a different message
make_Shirt("Small", "TypeScript is awesome!");

//Q#38:
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

//Q#39:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'France'));

//Q#40:
function make_album(artist_Name : string, albumtitle: string, tracks?: number) {
    let album: {artist:string,title:string,tracks?:number}={
        artist: artist_Name,
        title: albumtitle,
    };
    
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    
    return album;
}
// Create three album objects
let album1 = make_album('Taylor Swift', 'Evermore');
let album2 = make_album('Adele', '30');
let album3 = make_album('Coldplay', 'Music of the Spheres', 12);

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);