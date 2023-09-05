import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_BY_ID = 'GET_POKEMONS_BY_ID';
export const ORDER = 'ORDER';
export const NOMBRE = 'NOMBRE'

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

export const orderCardsAtaque = (order) => {
    return { type: ORDER, payload: order}
};

export const orderCardsNombre = (order) => {
   return {type: NOMBRE, payload: order }
}