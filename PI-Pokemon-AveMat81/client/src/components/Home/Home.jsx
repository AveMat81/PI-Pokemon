import Cards from "../Cards/Cards";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderCardsAtaque, orderCardsNombre } from "../../Redux/actions";
import styles from './Home.module.css'

const Home = ()=> {
    const allPokemons = useSelector(state=>state.filterPokemon)
    const [ordenAtaque, setOrdenAtaque] = useState(null);
    const [ordenNombre, setOrdenNombre] = useState(null)
    const dispatch = useDispatch();

    useEffect(()=>{
      if(!allPokemons.length) dispatch(getPokemons());
      if(ordenAtaque) dispatch(orderCardsAtaque(ordenAtaque));
      if(ordenNombre) dispatch(orderCardsNombre(ordenNombre))
    },[allPokemons.length, dispatch, ordenAtaque, ordenNombre]);

    const handleOrder = (event)=>{
        setOrdenAtaque(event.target.value)
    };

    const handleNombre = (event)=>{
        setOrdenNombre(event.target.value)
    };

    return(
        
        <div className={styles.div}>
            <label htmlFor="orden">Orden por ataque </label>
            <select id="orden"  onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>

            <label htmlFor="nombres">Orden por nombre </label>
            <select id="nombres"  onChange={handleNombre}>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
            </select>

            <label htmlFor="tipos">seleccionar por tipo </label> 
            <select id="tipos">
                {/* {
                    types.map((tipo)=>{
                        return (
                            <option value={tipo.nombre}>{tipo.nombre}</option>
                        )
                    })
                } */}
            </select>

            <label htmlFor="origen">seleccionar origen data </label> 
            <select id="origen">
            <option value="A">API</option>
                <option value="D">BDD</option>
            </select>



            <Cards />
            
        </div>
    )
};

export default Home;