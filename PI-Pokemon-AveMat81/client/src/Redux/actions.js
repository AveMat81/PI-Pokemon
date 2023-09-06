import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_BY_ID = 'GET_POKEMONS_BY_ID';
export const ORDER = 'ORDER';
export const NOMBRE = 'NOMBRE'
export const GET_TIPOS = 'GET_TIPOS';
export const FILTER_BY_TIPOS = "FILTER_BY_TIPOS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const FILTER_BY_ORIGEN = "FILTER_BY_ORIGEN"

export const getPokemons = () => {
       return async function (dispatch) {
           const apiData = await axios.get(
            'http://localhost:3001/pokemons'
            );
           const pokemons = apiData.data;
           dispatch({type: GET_POKEMONS, payload: pokemons});
       };
};

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/pokemons/${id}`
        );
        const pokemon = apiData.data;
        dispatch({type: GET_POKEMONS_BY_ID, payload: pokemon})
    };
};

export const getTipos = () =>{
    return async function (dispatch) {
        const apiData = await axios.get(
            'http://localhost:3001/types'
        );
        const types = apiData.data;
        dispatch({type: GET_TIPOS, payload: types})
    }
};

export const getPokemonByName = (nombre)=>{
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/pokemons/name?nombre=${nombre}`
            );
        const pokemon = apiData.data
        console.log(pokemon)
        dispatch({type: GET_POKEMON_BY_NAME, payload: pokemon})
    }
};

export const orderCardsAtaque = (order) => {
    return { type: ORDER, payload: order}
};

export const orderCardsNombre = (order) => {
   return {type: NOMBRE, payload: order }
};

export const filterByTipos = (tipo) => {
    return {type: FILTER_BY_TIPOS, payload: tipo}
};
export const filterByOrigen = (origen) => {
    return {type: FILTER_BY_ORIGEN, payload: origen}
};
