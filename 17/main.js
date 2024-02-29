var people = ["sana", "saba", "samreen"];
console.log("Hey", people[0], "I would like to invite you to dinner tonight");
console.log("Hey", people[1], "I would like to invite you to dinner tonight");
console.log("Hey", people[2], "I would like to invite you to dinner tonight");
console.log("Unfortunately ".concat(people[2], " is not coming today, So I am inviting my other friend"));
people.splice(2, 1, "sumbul");
console.log("Hey", people[0], "I would like to invite you to dinner tonight");
console.log("Hey", people[1], "I would like to invite you to dinner tonight");
console.log("Hey", people[2], "I would like to invite you to dinner tonight");
console.log("We found a bigger dinner table so we are inviting more people on the dinner table");
people.splice(0, 0, "sara");
people.splice(1, 0, "sadaf");
people.push("sahiba");
console.log("Hey", people[0], "I would like to invite you to dinner tonight");
console.log("Hey", people[1], "I would like to invite you to dinner tonight");
console.log("Hey", people[2], "I would like to invite you to dinner tonight");
console.log("Hey", people[3], "I would like to invite you to dinner tonight");
console.log("Hey", people[4], "I would like to invite you to dinner tonight");
console.log("Hey", people[5], "I would like to invite you to dinner tonight");
console.log("We can invite only two people for dinner");
while (people.length > 2) {
    var removePerson = people.pop();
    console.log("We're sorry, we can't invite ".concat(removePerson));
}
console.log("".concat(people[0], ", you are still invited for dinner"));
console.log("".concat(people[1], ", you are still invited for dinner"));
while (people.length = 0) {
    var removePerson = people.pop();
    console.log("removing ".concat(removePerson));
}
console.log(people);
