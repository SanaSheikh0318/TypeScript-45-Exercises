//Q11:
let friendName = ["Iqra","Noor","Hiba","Shiza"]
console.log(friendName[0])
console.log(friendName[1])
console.log(friendName[2])
console.log(friendName[3])

//Q12:
let friendsName = ["Iqra","Noor","Hiba","Shiza"]
let message = "How are you"
console.log("Hello",friendsName[0],message)
console.log("Hello",friendsName[1],message)
console.log("Hello",friendsName[2],message)
console.log("Hello",friendsName[3],message)

//Q13:
let transportationMode = ["Tesla", "BMW", "Audi", "Mercedes-Benz", "Lexus"];
transportationMode.forEach((Mode) =>
    console.log(`I would like to buy a ${Mode}`)
);
console.log(`A ${transportationMode[3]} car offers advanced technology and luxury`);

//Q14:
let GuestList = ["Hira","Zoya","Aiesha"];
GuestList.forEach((invitation) =>
    console.log(`Assalam O Alaikum ${invitation}, I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations.`)
);

//Q15:
let newGuestList = ["Hira","Zoya","Aiesha"];
console.log(`${newGuestList[1]} is not coming`)
newGuestList.splice(1,1,"Komal")
newGuestList.forEach((invitation) =>
    console.log(`Assalam O Alaikum ${invitation}, I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations.`)
);

//Q#16:
let moreGuestList = ["Hira","Zoya","Aiesha"];
console.log(`${moreGuestList[1]} is not coming`)
moreGuestList.splice(1,1,"Komal")
console.log(`Good News! We have found a bigger table for dinner. Let's call some more guests.`)

moreGuestList.unshift("Alina");
moreGuestList.push("Taha");

let middleGuest: number = Math.floor(moreGuestList.length/2);
moreGuestList.splice(middleGuest, 0, "Osama");
console.log("Updated List of our Guests:");

moreGuestList.forEach((moreinvitation) =>
    console.log(`Assalam O Alaikum ${moreinvitation}, I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations.`)
);

//Q#17:
let shrinkGuestList = ["Hira","Zoya","Aiesha"];
console.log(`${shrinkGuestList[1]} is not coming`)
shrinkGuestList.splice(1,1,"Komal")
console.log(`Good News! We have found a bigger table for dinner. Let's call some more guests.`)

shrinkGuestList.unshift("Alina");
shrinkGuestList.push("Taha");

let midGuest: number = Math.floor(shrinkGuestList.length/2);
shrinkGuestList.splice(midGuest, 0, "Osama");
console.log("Updated List of our Guests:");

shrinkGuestList.forEach((shrinkinvitation) =>
    console.log(`Assalam O Alaikum ${shrinkinvitation}, I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations.`)
);

console.log("Unfortunately, New dinner table won't arrive in time for the dinner, So I have space for only 2 guests.")
while (shrinkGuestList.length > 2){
    let removeGuest = shrinkGuestList.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`)
};

console.log("Invitation to the last 2 Guests");
shrinkGuestList.forEach(guestinvitaion => console.log(`Hello ${guestinvitaion} You're still invited for dinner`))
shrinkGuestList.pop();
shrinkGuestList.pop();

console.log(shrinkGuestList, "Empty List");

//Q#18:
let placesToVisit = ["Dubai","Paris","Turkey","London","Malaysia"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("Still in its Original Order:" , placesToVisit);
console.log("Reverse Order:", [...placesToVisit].reverse());
console.log("Still in its Original Order:" , placesToVisit);
console.log("Original Array Reversed:",placesToVisit.reverse());
console.log("Back to Original Order:",placesToVisit.reverse());
console.log("Sorted in Alphabetical Order:",placesToVisit.sort());
console.log("Original Array Reversed Again:",placesToVisit.reverse());

//Q#19:
let guestList = ["Hira","Zoya","Aiesha"];
//GuestList.forEach((invitation) => console.log(`Assalam O Alaikum ${invitation}, I would like to invite you to dinner at my place. It would be an honor to have you as my guest. I look forward to a wonderful evening with engaging conversations.`));

let lengthGuests: number = guestList.length;
console.log(`We are Inviting total ${lengthGuests} guests.`);

//Q#20:
let mountains: string[] = ["Mount Everest","K2","Makalu","Cho Oyu","Dhaulagiri","Manaslu","Nanga Parbat","Annapurna"];

console.log("List of famous mountains:");
mountains.forEach(mountain => console.log(mountain));
