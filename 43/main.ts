function show_magicians(magicians: string[]){
    magicians.forEach(magicianName => {
        console.log(magicianName)
    })
}

const someMagicians: string[] = ["Mr X", "Mr Y", "Mr Z"]


function make_great(magicians: string[]): string[] {
    const greatMagicians : string[] = [...magicians]
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i]  
    }
    return greatMagicians;
}


const greatMagicians : string[] = make_great(someMagicians.slice())
// modifying array
make_great(someMagicians)

// updated array

show_magicians(someMagicians)
show_magicians(greatMagicians)