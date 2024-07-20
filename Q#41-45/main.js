var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q#41:
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function and pass the array
show_magicians(magicians);
//Q#42:
function show_Magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var Magician = Magicians_1[_i];
        console.log(Magician);
    }
}
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great ".concat(Magicians[i]);
    }
    return Magicians;
}
// Create an array of magician's names
var Magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Modify the array of magicians
Magicians = make_great(Magicians);
// Call the function and pass the modified array
show_Magicians(Magicians);
//Q#43:
function Show_magicians(magIcians) {
    for (var _i = 0, magIcians_1 = magIcians; _i < magIcians_1.length; _i++) {
        var magIcian = magIcians_1[_i];
        console.log(magIcian);
    }
}
function Make_great(magIcians) {
    var great_magicians = __spreadArray([], magIcians, true); // Create a copy of the original array
    for (var i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = "the Great ".concat(great_magicians[i]);
    }
    return great_magicians;
}
// Create an array of magician's names
var magIcians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Modify the array of magicians
var great_magicians = Make_great(magIcians);
// Display the original array
console.log("\nOriginal magicians:");
Show_magicians(magIcians);
// Display the modified array
console.log("\nGreat magicians:");
Show_magicians(great_magicians);
//Q#44:
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Your sandwich is ready!\n");
}
// Call the function three times with a different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Chicken", "Tomato", "Mayonnaise", "Bacon");
make_sandwich("Peanut Butter", "Jelly", "Egg");
function create_car(manufacturer, model, additionalProperties) {
    var car = __assign({ manufacturer: manufacturer, model: model }, additionalProperties);
    return car;
}
// Call the function with required information and two other name-value pairs
var car1 = create_car('Toyota', 'Corolla', { color: 'Red', year: 2021 });
var car2 = create_car('Tesla', 'Model S', { color: 'Black', autopilot: true });
var car3 = create_car('Ford', 'Mustang', { color: 'Blue', convertible: true });
// Print the returned objects to make sure all information is stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
