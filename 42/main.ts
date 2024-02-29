function show_magicians(magicians: string[]){
    magicians.forEach(magicianName => {
        console.log(magicianName)
    })
}

const someMagicians: string[] = ["Mr X", "Mr Y", "Mr Z"]
show_magicians(someMagicians)

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i]
    }
}

// modifying array
make_great(someMagicians)

// updated array

show_magicians(someMagicians)