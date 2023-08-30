const { Pokemon, Types } = require('../db');
const axios = require('axios');

const URL = "https://pokeapi.co/api/v2/type"

const getPokemonByTypes = async (req, res)=>{
   try {
    const {data} = await axios(URL)
    const response = data.results
    const tipos =  response.map((element)=>{
        return {nombre: element.name}
    });    
    await Types.bulkCreate(tipos)
    
    res.json(tipos)

   } catch (error) {
    res.status(404).send(error.message)
   }
};

module.exports = getPokemonByTypes;