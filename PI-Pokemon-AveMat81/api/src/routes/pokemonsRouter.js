const {Router} = require('express');
const {getAllPokemons, getPokemonByName, getPokemonById, postPokemon} = require('../Controllers/pokemonController')


const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllPokemons); 

pokemonsRouter.get("/name", getPokemonByName);

pokemonsRouter.get("/:idPokemon", getPokemonById);

pokemonsRouter.post("/", postPokemon);

module.exports = pokemonsRouter;