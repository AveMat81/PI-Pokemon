const { Pokemon, Types } = require('../db');


const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon'

const getAllPokemons = async (req, res)=>{
    try {
        const {data} = await axios(`${URL}/?limit=60`)
         const  response = data.results
         const pokemons = response.map(async(element)=>{
            const {data} = await axios(`${URL}/${element.name}`)
            const tipos = [{nombre: data.types[0].type.name}]
            if(data.types[1]) tipos.push({nombre: data.types[1].type.name})  
            return {
                id: data.id,
                nombre: data.name,
                imagen: data.sprites.front_shiny,
                vida: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                velocidad:data.stats[5].base_stat,
                altura: data.height,
                peso: data.weight,
                types: tipos
            }
         })
         const allPokemons = await Promise.all(pokemons)
         const pokes = await Promise.all([allPokemons, Pokemon.findAll({include: Types})])
         res.status(200).json(pokes)
        } catch (error) {
        res.status(400).json(error.message)
    }
};

const getPokemonById = async (req, res)=>{
    const {idPokemon} = req.params
    try {
        if (isNaN(idPokemon)) {
            //falta agregar el tipo de pokemon en BDD
            const pokemon = await Pokemon.findOne({where: {id: idPokemon}});
            if(!pokemon){
                res.status(404).send("No se encontro el pokemon buscado");
            } else {
                res.status(200).json(pokemon)
            }
            // La variable idPokemon no es un número
            // Buscar en la BDD Pokemons
        } else {
            const {data} = await axios(`${URL}/${idPokemon}`)
            if(data){
             const pokemon = {
                id: data.id,
                nombre: data.name,
                imagen: data.sprites.front_shiny,
                vida: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                velocidad:data.stats[5].base_stat,
                altura: data.height,
                peso: data.weight,
                tipos: data.types[1]? data.types[0].type.name +' - '+ data.types[1].type.name : data.types[0].type.name
             }
             return res.status(200).json(pokemon)
            }else{
             return res.status(404).send('Pokemon no encontrado')
            }
            //es un número
            //buscar en la api x idPokemon
            }            
    } catch (error) {
        res.status(500).send(error.message); 
    }
};

const getPokemonByName = async (req, res)=>{
    let {nombre} = req.query
     nombre = nombre.toLowerCase()
    try {
        const pokemon = await Pokemon.findOne({where: {nombre: nombre}, include: Types});
       if(pokemon){
           return res.status(200).json(pokemon)
        }
         const {data} = await axios(`${URL}/${nombre}`)
         const tipos = [{nombre: data.types[0].type.name}]
            if(data.types[1]) tipos.push({nombre: data.types[1].type.name})
        if(data){
         const pokemon = {
            id: data.id,
            nombre: data.name,
            imagen: data.sprites.front_shiny,
            vida: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            velocidad:data.stats[5].base_stat,
            altura: data.height,
            peso: data.weight,
            types: tipos
           
         }
         return res.status(200).json(pokemon)
        }else{
         return res.status(404).send('Pokemon no encontrado')
        }
    } catch (error) {
        
        res.status(500).json(error.message)
    }
};



const postPokemon = async (req, res) => {
    const {tipos, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso } = req.body;
    try {
       const newPokemon = await Pokemon.create({
            nombre,
            imagen,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso
        });
        await newPokemon.addTypes(tipos)
        return res.status(201).send('Pokémon creado exitosamente');
    } catch (error) {
        return res.status(400).send('Error al crear el Pokémon' + error.message);
    }
};

module.exports = {
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
    postPokemon
}