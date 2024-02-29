let current_users : string[] = ["masood", "alam", "kamran", "khan", "tessori"]
let new_users : string[] = ["zia", "khan", "ameen", "alam", "imran"]

for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())){
        console.log(`Sorry the username ${new_users[i]} is already taken, please try another username`)
    }
    else {
        console.log(`the username ${new_users[i]} is available`)
    }
}