const PokemonController = require('../controllers/pokemon-controller')

module.exports = {
    '/pokemon': () => console.log('Buscando pokemon por id...'),
    '/pokemon-name': () => console.log('Buscando pokemon por nome...'),
    '/pokemons': PokemonController.listPokemons
}