function show_magicians(magicians: string[]){
    magicians.forEach(magicianName => {
        console.log(magicianName)
    })
}

const someMagicians: string[] = ["Mr X", "Mr Y", "Mr Z"]
show_magicians(someMagicians)