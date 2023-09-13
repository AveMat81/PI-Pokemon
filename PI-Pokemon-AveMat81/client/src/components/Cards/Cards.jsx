import Card from '../Card/Card';
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Cards = ()=>{
  const allPokemons = useSelector(state=>state.filterPokemon)

useEffect(()=>{
setCurrentPage(1)
},[allPokemons])
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; 

  const indexOfLastPokemon = currentPage * pageSize;
  const indexOfFirstPokemon = indexOfLastPokemon - pageSize;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const pageNumbers = [];
for (let i = 1; i <= Math.ceil(allPokemons.length / pageSize); i++) {
  pageNumbers.push(i);
}

// eslint-disable-next-line no-unused-vars
const handleClick = (number) => {
  setCurrentPage(number);
};


    return(
        <div>
            <div className={styles.cardGrid}>
                {currentPokemons.map(pokemon=>{
                    return <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        nombre={pokemon.nombre}
                        imagen={pokemon.imagen}
                        tipos={pokemon.types.map((type) => type.nombre).join(' - ')}                                                       
                    />
                })}
            </div>

            <div >
                {pageNumbers.map(number => (
                 <span  className={`${styles.numberButton} ${
                        number === currentPage ? styles.numberButtonSelected : ''
                  }`}
                         key={number} 
                         onClick={() => setCurrentPage(number)}>
                 {number}
                 </span>
                ))}

            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(allPokemons.length / pageSize)}>Siguiente</button>
            </div>
            </div>
        </div>        
    )
};

export default Cards;