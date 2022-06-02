const PokemonController = require("../controllers/pokemon-controller");

module.exports = {
  "/pokemon": PokemonController.getPokemonById,
  "/pokemon-name": PokemonController.getPokemonByName,
  "/pokemons": PokemonController.listPokemons,
};
