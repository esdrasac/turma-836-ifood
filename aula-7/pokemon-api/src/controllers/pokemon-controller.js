const Pokemon = require("../models/pokemon");
const { setResponse, getErrorResponse } = require("../utils/httpResponse");

class PokemonController {
  static async listPokemons(req, res) {
    try {
      const { limit } = req.queryParams;

      if (limit && Number.isNaN(limit)) {
        throw setResponse(400, "Limit must be a number");
      }

      const pokemons = await Pokemon.listPokemons(limit);

      res.writeHead(200);
      res.end(JSON.stringify(pokemons));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }

  static async getPokemonById(req, res) {
    try {
      const { id } = req.queryParams;

      if (!id || Number.isNaN(id)) {
        setResponse(400, "Id is required or invalid");
      }

      const pokemon = await Pokemon.getPokemonById(id);

      res.writeHead(200);
      res.end(JSON.stringify(pokemon));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }

  static async getPokemonByName(req, res) {
    try {
      const { name } = req.queryParams;

      if (!name || typeof name !== "string") {
        setResponse(400, "Name is required or invalid");
      }

      const pokemon = await Pokemon.getPokemonByName(name);

      res.writeHead(200);
      res.end(JSON.stringify(pokemon));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      res.writeHead(status);
      res.end(message);
    }
  }
}

module.exports = PokemonController;
