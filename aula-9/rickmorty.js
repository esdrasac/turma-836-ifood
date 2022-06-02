const randm = require('./rickmorty.json')

const { results } = randm

console.log(results[0].origin)

//filtro por origtem
//buscar os personagens


const getCharByOrigin = (origin) => {
    console.log(results.length)
    const filteredCharacters = results.filter((char) => {
        return char.origin.name === origin 
    })
    console.log(filteredCharacters.length);
    return filteredCharacters
}

getCharByOrigin('Earth (C-137)')