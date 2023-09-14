import { GET_POKEMONS, GET_POKEMONS_BY_ID, ORDER, GET_TIPOS, FILTER_BY_TIPOS, GET_POKEMON_BY_NAME, FILTER_BY_ORIGEN, CLEAR_DETAIL, CLEAR } from './actions';

const initialState = {
    allPokemons: [],
    detailPokemon: [],
    filterPokemon: [],
    types: []
};
let tipo = null
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_POKEMONS:
           return { ...state,
                    allPokemons: [...action.payload[0], ...action.payload[1]],
                    filterPokemon: [...action.payload[0], ...action.payload[1]]
                  }

        case GET_POKEMONS_BY_ID:
            return { ...state, detailPokemon: action.payload} 

        case CLEAR_DETAIL:
            return { ...state, detailPokemon: []};

            
        case GET_POKEMON_BY_NAME:
            const nom = [...state.allPokemons].filter((p)=> p.nombre !== action.payload.nombre) 
            nom.unshift(action.payload)
            return { 
                ...state, 
                filterPokemon: nom
            }
                
        case ORDER:
            const pokemonOrden = [...state.filterPokemon]
                return {
                    ...state,
                    filterPokemon: action.payload === "A"
                    ? pokemonOrden.sort((a,b)=> a.ataque - b.ataque)
                    : (action.payload === "D")
                    ? pokemonOrden.sort((a,b)=> b.ataque - a.ataque)
                    : (action.payload === "AZ")
                    ? pokemonOrden.sort((a, b) => a.nombre.localeCompare(b.nombre))
                    : (action.payload === "ZA")
                    ? pokemonOrden.sort((a, b) => b.nombre.localeCompare(a.nombre))
                    : state.filterPokemon
                    //:state.allPokemons
                }
                    
        case GET_TIPOS:
                return {
                     ...state,
                     types: action.payload
                }
                        
        case FILTER_BY_TIPOS: 
                let pokeTipos = [...state.filterPokemon]
                if(tipo !== action.payload && action.payload !== "I"){ pokeTipos = [ ...state.allPokemons ].filter((poke) => {
                return  poke.types.find( (t) => t.nombre === action.payload)
                })}
                if(action.payload === "I") {
                    pokeTipos = state.allPokemons 
                }
                    tipo = action.payload
                    return{
                       ...state,
                       filterPokemon: pokeTipos
                    }
                        
        case FILTER_BY_ORIGEN:
                let pokeOrigen = [ ...state.filterPokemon]
                if(action.payload === "API"){ pokeOrigen = [ ...state.allPokemons].filter((p)=> !isNaN(p.id))
                }
                if(action.payload === "BDD"){ pokeOrigen = [ ...state.allPokemons].filter((p)=> isNaN(p.id))
                }
                if(action.payload === "I") {
                    pokeOrigen = state.allPokemons 
                }
                    
                return{
                   ...state,
                   filterPokemon: pokeOrigen
                }

        case CLEAR:
                return { 
                    ...state,
                    filterPokemon: [...state.allPokemons]
                }

        default:
            return { ...state };
    }
};
                
                export default rootReducer; 