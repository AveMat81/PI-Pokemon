const {Router}= require('express');
const getPokemonByTypes = require('../Controllers/typesController')
const typesRouter = Router();


typesRouter.get("/", getPokemonByTypes);


module.exports = typesRouter;