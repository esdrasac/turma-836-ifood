const Pokemon = require('../models/pokemon')
const urlEncode = require('url')
const qs = require('querystring')

class PokemonController {
    static async listPokemons(req, res) {
        try {
            const { limit } = req.queryParams
            
            if(limit && isNaN(limit)) {
                throw {
                    statusCode: 404,
                    message: 'Limit must be a number'
                }
            }

            const pokemons = await Pokemon.listPokemons(limit)

            res.writeHead(200)
            res.end(JSON.stringify(pokemons))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(JSON.stringify({message: error.message || 'Server Error'}) )
        }
    }
}

module.exports = PokemonController