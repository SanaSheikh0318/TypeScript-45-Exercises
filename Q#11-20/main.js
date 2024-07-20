var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q11:
var friendName = ["Iqra", "Noor", "Hiba", "Shiza"];
console.log(friendName[0]);
console.log(friendName[1]);
console.log(friendName[2]);
console.log(friendName[3]);
//Q12:
var friendsName = ["Iqra", "Noor", "Hiba", "Shiza"];
var message = "How are you";
console.log("Hello", friendsName[0], message);
console.log("Hello", friendsName[1], message);
console.log("Hello", friendsName[2], message);
console.log("Hello", friendsName[3], message);
//Q13:
var transportationMode = ["Tesla", "BMW", "Audi", "Mercedes-Benz", "Lexus"];
transportationMode.forEach(function (Mode) {
    return console.log("I would like to buy a ".concat(Mode));
});
console.log("A ".concat(transportationMode[3], " car offers advanced technology and luxury"));
//Q14:
var GuestList = ["Hira", "Zoya", "Aiesha"];
GuestList.forEach(function (invitation) {
    return console.log("Assalam O Alaikum ".concat(invitation, ", I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations."));
});
//Q15:
var newGuestList = ["Hira", "Zoya", "Aiesha"];
console.log("".concat(newGuestList[1], " is not coming"));
newGuestList.splice(1, 1, "Komal");
newGuestList.forEach(function (invitation) {
    return console.log("Assalam O Alaikum ".concat(invitation, ", I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations."));
});
//Q#16:
var moreGuestList = ["Hira", "Zoya", "Aiesha"];
console.log("".concat(moreGuestList[1], " is not coming"));
moreGuestList.splice(1, 1, "Komal");
console.log("Good News! We have found a bigger table for dinner. Let's call some more guests.");
moreGuestList.unshift("Alina");
moreGuestList.push("Taha");
var middleGuest = Math.floor(moreGuestList.length / 2);
moreGuestList.splice(middleGuest, 0, "Osama");
console.log("Updated List of our Guests:");
moreGuestList.forEach(function (moreinvitation) {
    return console.log("Assalam O Alaikum ".concat(moreinvitation, ", I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations."));
});
//Q#17:
var shrinkGuestList = ["Hira", "Zoya", "Aiesha"];
console.log("".concat(shrinkGuestList[1], " is not coming"));
shrinkGuestList.splice(1, 1, "Komal");
console.log("Good News! We have found a bigger table for dinner. Let's call some more guests.");
shrinkGuestList.unshift("Alina");
shrinkGuestList.push("Taha");
var midGuest = Math.floor(shrinkGuestList.length / 2);
shrinkGuestList.splice(midGuest, 0, "Osama");
console.log("Updated List of our Guests:");
shrinkGuestList.forEach(function (shrinkinvitation) {
    return console.log("Assalam O Alaikum ".concat(shrinkinvitation, ", I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations."));
});
console.log("Unfortunately, New dinner table won't arrive in time for the dinner, So I have space for only 2 guests.");
while (shrinkGuestList.length > 2) {
    var removeGuest = shrinkGuestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I can't invite you to dinner"));
}
;
console.log("Invitation to the last 2 Guests");
shrinkGuestList.forEach(function (guestinvitaion) { return console.log("Hello ".concat(guestinvitaion, " You're still invited for dinner")); });
shrinkGuestList.pop();
shrinkGuestList.pop();
console.log(shrinkGuestList, "Empty List");
//Q#18:
var placesToVisit = ["Dubai", "Paris", "Turkey", "London", "Malaysia"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
console.log("Still in its Original Order:", placesToVisit);
console.log("Reverse Order:", __spreadArray([], placesToVisit, true).reverse());
console.log("Still in its Original Order:", placesToVisit);
console.log("Original Array Reversed:", placesToVisit.reverse());
console.log("Back to Original Order:", placesToVisit.reverse());
console.log("Sorted in Alphabetical Order:", placesToVisit.sort());
console.log("Original Array Reversed Again:", placesToVisit.reverse());
//Q#19:
var guestList = ["Hira", "Zoya", "Aiesha"];
//GuestList.forEach((invitation) => console.log(`Assalam O Alaikum ${invitation}, I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations.`));
var lengthGuests = guestList.length;
console.log("We are Inviting total ".concat(lengthGuests, " guests."));
//Q#20:
var mountains = ["Mount Everest", "K2", "Makalu", "Cho Oyu", "Dhaulagiri", "Manaslu", "Nanga Parbat", "Annapurna"];
console.log("List of famous mountains:");
mountains.forEach(function (mountain) { return console.log(mountain); });
var Student = {
    Name: "Sana Sheikh",
    age: 22,
    StudentId: "S22013",
    Major: "BBA",
    Year: 2,
    GPA: 3.95,
};
console.log(Student);
