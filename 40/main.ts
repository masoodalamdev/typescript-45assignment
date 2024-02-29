function make_album(artistName: string, albumTitle: string, numberOfTracks?: number): {artist: string, title: string, tracks?: number} {
    const albumObj : {artist: string, title: string, tracks?: number} = {
        artist : artistName,
        title: albumTitle
    };

    if (numberOfTracks !== undefined){
        albumObj.tracks = numberOfTracks
    }
    return  albumObj
}

const album = make_album("Atif Aslam", "Coke Studio Season 10")
console.log(album)
const album2 = make_album("Amjad Sabri", "Bhardo Jholi")
console.log(album2)
const album3 = make_album("Nusrat Fatah Ali Khan", "Nabi Nabi Ya Nabi Nabi")
console.log(album3)

const album4 = make_album("Aziz Mian", "Tajdar e Haram", 9)
console.log(album4)