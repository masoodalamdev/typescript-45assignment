function show_magicians(magicians) {
    magicians.forEach(function (magicianName) {
        console.log(magicianName);
    });
}
var someMagicians = ["Mr X", "Mr Y", "Mr Z"];
show_magicians(someMagicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
// modifying array
make_great(someMagicians);
// updated array
show_magicians(someMagicians);
