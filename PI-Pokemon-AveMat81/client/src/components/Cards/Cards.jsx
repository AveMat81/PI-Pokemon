import Card from '../Card/Card'
import styles from './Cards.module.css'
import { useSelector } from 'react-redux';

const Cards = ()=>{
  const allPokemons = useSelector(state=>state.filterPokemon)
  
    return(
        <div className={styles.cardGrid}>
            {allPokemons.map(pokemon=>{
                return <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    nombre={pokemon.nombre}
                    imagen={pokemon.imagen}
                    tipos={pokemon.types.map((type) => type.nombre).join(' - ')}                                                       
                />
            })};
       </div>

    )
};

export default Cards;