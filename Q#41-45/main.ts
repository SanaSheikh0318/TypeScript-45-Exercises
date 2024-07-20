//Q#41:
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function and pass the array
show_magicians(magicians);

//Q#42:
function show_Magicians(Magicians: string[]) {
    for (let Magician of Magicians) {
        console.log(Magician);
    }
}

function make_great(Magicians: string[]): string[] {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = `The Great ${Magicians[i]}`;
    }
    return Magicians;
}

// Create an array of magician's names
let Magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Modify the array of magicians
Magicians = make_great(Magicians);

// Call the function and pass the modified array
show_Magicians(Magicians);

//Q#43:
function Show_magicians(magIcians: string[]) {
    for (let magIcian of magIcians) {
        console.log(magIcian);
    }
}

function Make_great(magIcians: string[]): string[] {
    let great_magicians = [...magIcians]; // Create a copy of the original array
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = `the Great ${great_magicians[i]}`;
    }
    return great_magicians;
}

// Create an array of magician's names
let magIcians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Modify the array of magicians
let great_magicians = Make_great(magIcians);

// Display the original array
console.log("\nOriginal magicians:");
Show_magicians(magIcians);

// Display the modified array
console.log("\nGreat magicians:");
Show_magicians(great_magicians);

//Q#44:
function make_sandwich(...items: string[]) {
    console.log("\nMaking a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Your sandwich is ready!\n");
}

// Call the function three times with a different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Chicken", "Tomato", "Mayonnaise", "Bacon");
make_sandwich("Peanut Butter", "Jelly","Egg");

//Q#45:
type AdditionalProperties = {
    [key: string]: any;
};

function create_car(manufacturer: string, model: string, additionalProperties: AdditionalProperties) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...additionalProperties
    };
    return car;
}

// Call the function with required information and two other name-value pairs
let car1 = create_car('Toyota', 'Corolla', { color: 'Red', year: 2021 });
let car2 = create_car('Tesla', 'Model S', { color: 'Black', autopilot: true });
let car3 = create_car('Ford', 'Mustang', { color: 'Blue', convertible: true });

// Print the returned objects to make sure all information is stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
