var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Madina", "Makkah", "Palestine", "Iraq", "Al-Aqsa"];
console.log("Original Array", places);
console.log("Sorted array in alphabetical order", __spreadArray([], places, true).sort());
console.log("Original Array", places);
console.log("reverse array in alphabetical order", __spreadArray([], places, true).sort().reverse());
console.log("Original Array", places);
places.reverse();
console.log("reverse the order of array", places);
places.reverse();
console.log("reverse again to get original array", places);
places.sort();
console.log("sorted array in alphabetical order", places);
places.reverse();
console.log("sorted array in reverse alphabetical order", places);
