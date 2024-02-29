function make_album(artistName, albumTitle, numberOfTracks) {
    var albumObj = {
        artist: artistName,
        title: albumTitle
    };
    if (numberOfTracks !== undefined) {
        albumObj.tracks = numberOfTracks;
    }
    return albumObj;
}
var album = make_album("Atif Aslam", "Coke Studio Season 10");
console.log(album);
var album2 = make_album("Amjad Sabri", "Bhardo Jholi");
console.log(album2);
var album3 = make_album("Nusrat Fatah Ali Khan", "Nabi Nabi Ya Nabi Nabi");
console.log(album3);
var album4 = make_album("Aziz Mian", "Tajdar e Haram", 9);
console.log(album4);
