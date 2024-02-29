var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magicianName) {
        console.log(magicianName);
    });
}
var someMagicians = ["Mr X", "Mr Y", "Mr Z"];
function make_great(magicians) {
    var greatMagicians = __spreadArray([], magicians, true);
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return greatMagicians;
}
var greatMagicians = make_great(someMagicians.slice());
// modifying array
make_great(someMagicians);
// updated array
show_magicians(someMagicians);
// show_magicians(greatMagicians)
