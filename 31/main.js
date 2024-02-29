var usernames = ["masood", "alam", "admin", "zia", "khan"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello ".concat(usernames[i], " would you like to view status report"));
    }
    else {
        console.log("Hello ".concat(usernames[i], " thankyou for logging again"));
    }
}
usernames = [];
if (usernames.length === 0) {
    console.log("we need to find some users");
}
