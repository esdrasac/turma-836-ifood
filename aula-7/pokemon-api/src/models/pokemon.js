const pokeApi = require("../config/poke-api");

class Pokemon {
  static async listPokemons(limit) {
    const options = {
      params: {
        limit: limit || 30,
      },
    };

    const { data } = await pokeApi.get("/pokemon", options);
    return data;
  }

  static async getPokemonByName(name) {
    const { data } = await pokeApi.get(`/pokemon/${name}`);
    return data;
  }

  static async getPokemonById(id) {
    const { data } = await pokeApi.get(`/pokemon/${id}`);
    return data;
  }
}

module.exports = Pokemon;
