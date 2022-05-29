const pokeApi = require('../config/poke-api')

class Pokemon {
    static async listPokemons(limit) {
        const options = {
            params: {
                limit: limit || 30
            }
        }
        
        const { data } = await pokeApi.get('/pokemon', options)

        return data
    }

    static async getPokemonByName(name) {
        return await pokeApi.get(`/pokemon/${name}`)
    }

    static async getPokemonById(id) {
        const options = {
            params: {
                id
            }
        }

        return await pokeApi.get('/pokemon', options)
    }
}

module.exports = Pokemon