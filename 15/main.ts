let people = ["sana", "saba", "samreen"]
console.log("Hey", people[0], "I would like to invite you to dinner tonight")
console.log("Hey", people[1], "I would like to invite you to dinner tonight")
console.log("Hey", people[2], "I would like to invite you to dinner tonight")
console.log(`Unfortunately ${people[2]} is not coming today, So I am inviting my other friend`)
people.splice(2, 1, "sumbul")
console.log("Hey", people[0], "I would like to invite you to dinner tonight")
console.log("Hey", people[1], "I would like to invite you to dinner tonight")
console.log("Hey", people[2], "I would like to invite you to dinner tonight")