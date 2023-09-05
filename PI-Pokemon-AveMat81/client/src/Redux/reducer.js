import { GET_POKEMONS, GET_POKEMONS_BY_ID, ORDER, NOMBRE } from './actions';

const initialState = {
    allPokemons: [],
    detailPokemon: [],
    filterPokemon: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_POKEMONS:
           return { ...state,
                     allPokemons: [...action.payload[0], ...action.payload[1]],
                     filterPokemon: [...action.payload[0], ...action.payload[1]]
                  }

        case GET_POKEMONS_BY_ID:
            return { ...state, detailPokemon: action.payload} 
            
        case ORDER:
            const pokemonOrden = [...state.filterPokemon]
            return {
                ...state,
                filterPokemon: action.payload === "A"
                ? pokemonOrden.sort((a,b)=> a.ataque - b.ataque)
                : pokemonOrden.sort((a,b)=> b.ataque - a.ataque)
            }

        case NOMBRE:
            const pokemonNombre = [...state.filterPokemon]
            return {
                ...state,
                filterPokemon: action.payload === "A"
                ? pokemonNombre.sort((a, b) => a.nombre.localeCompare(b.nombre))
                : pokemonNombre.sort((a, b) => b.nombre.localeCompare(a.nombre))
            }
        default:
            return { ...state };
    }
};

export default rootReducer; 