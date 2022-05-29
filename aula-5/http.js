const http = require('http')
const dataBase = require('./pokemons')
const _url = require('url')
const qs = require('querystring')

//http://localhost/pokemons
const server = http.createServer((request, response) => {

    const {url, method} = request
    const { pathname, query } = _url.parse(url)
    const queryParsed = qs.parse(query)

    if(method !== 'GET') {
        response.writeHead(405)
        response.end(JSON.stringify({ message: 'Method not allowed'}))
    }

    if(pathname == '/pokemons') {
        const pokemons = getPokemons()

        if(!pokemons) {
            response.writeHead(404)
            response.end(JSON.stringify({message: 'No pokemons available'}))
        }

        response.writeHead(200)
        response.end(JSON.stringify(pokemons))
    }

    if(pathname == '/pokemon') {
        if(!queryParsed.id) {
            response.writeHead(400)
            response.end(JSON.stringify({ message: 'Bad Request: id is required'}))
        }

        const pokemon = getPokemon(queryParsed.id)
        console.log(pokemon)
        if(!pokemon.length) {
            response.writeHead(404)
            response.end(JSON.stringify({ message: 'Bad Request: id is required'}))
        } else {
            response.writeHead(200)
            response.end(JSON.stringify(pokemon))
        }
    }
})


const getPokemons = () => {
    return JSON.stringify(dataBase) || null
}

const getPokemon = (id) => {
    const pokemon = dataBase.results.filter((pokemon) => pokemon.id == id)

    if(!pokemon) {
        return null
    }

    return pokemon
}


server.listen(3000, () => console.log('Server listening on port 3000'))


