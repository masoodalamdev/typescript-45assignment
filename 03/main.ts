// store a name in a variable
let governorSindh : string = "Kamran Khan Tessori"
// convert name into lowercase
console.log(governorSindh.toLowerCase())
// convert name into uppercase
console.log(governorSindh.toUpperCase())
// convert name into title case

var someText : string = "we will convert this line into TitleCase"
function toTitleCase(someText){
return someText.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
}).join(' ')
}
console.log(toTitleCase(someText))