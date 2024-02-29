var current_users = ["masood", "alam", "kamran", "khan", "tessori"];
var new_users = ["zia", "khan", "ameen", "alam", "imran"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log("Sorry the username ".concat(new_users[i], " is already taken, please try another username"));
    }
    else {
        console.log("the username ".concat(new_users[i], " is available"));
    }
}
