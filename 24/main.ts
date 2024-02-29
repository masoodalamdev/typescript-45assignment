let color : string = "Orange"
let number : number = 10
let fruits : string[] = ["Mango", "Orange", "Apple"]
console.log(color == "Orange")
console.log(color !== "Orange")

console.log(color.toLowerCase() !== "Orange")
console.log(color.toLowerCase() == "Orange")

console.log(number == 10)
console.log(number !== 10)

console.log(number >= 10)
console.log(number >= 11)

console.log(number <= 10)
console.log(number <= 1)

console.log(number == 10 && color == "Orange")
console.log(number == 10 && color == "Black")

console.log(number == 10 || color == "Black")
console.log(number == 11 || color == "Black" )

console.log(fruits.includes("Apple"))
console.log(fruits.includes("Banana"))