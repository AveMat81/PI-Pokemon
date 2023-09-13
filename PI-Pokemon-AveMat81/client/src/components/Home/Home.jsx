import Cards from "../Cards/Cards";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderCardsAtaque, getTipos, filterByTipos, filterByOrigen, clear } from "../../Redux/actions";
import styles from './Home.module.css'

const Home = ()=> {
    const allPokemons = useSelector(state=>state.filterPokemon)
    const types = useSelector(state=>state.types)
    const [ordenAtaque, setOrdenAtaque] = useState(null);
    const [filterTipos, setFilterTipos] = useState(null);
    const [filterOrigen, setFilterOrigen] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
      if(!allPokemons.length) dispatch(getPokemons());
      if(!types.length)dispatch(getTipos())
      if(filterOrigen) dispatch(filterByOrigen(filterOrigen));
      if(filterTipos) dispatch(filterByTipos(filterTipos));
      if(ordenAtaque) dispatch(orderCardsAtaque(ordenAtaque));
    },[dispatch, filterOrigen, filterTipos, ordenAtaque]);

    const handleOrder = (event)=>{
       // dispatch(orderCardsAtaque(event.target.value))
        //setAux(!aux)
         setOrdenAtaque(event.target.value)
    };

    const handleTipos = (event) => {
        setFilterTipos(event.target.value)
    }
    const handleOrigen = (event) => {
        setFilterOrigen(event.target.value)
    }
    const handleClear = () =>{
        dispatch(clear())
    }

    return(
        
        <div className={styles.div}>
            <label>Ordenar por </label>
            <select id="orden"  onChange={handleOrder}>
                <option value="I">Seleccionar</option>
                <option value="A">Ataque Asc</option>
                <option value="D">Ataque Des</option>
                <option value="AZ">A-Z</option>
                <option value="ZA">Z-A</option>
            </select>

            <label>Seleccionar por tipo </label> 
            <select id="tipos" onChange={handleTipos}>
             <option value="I">Seleccionar</option>
                   { types.map((tipo)=> {
                        return (
                            <option key={tipo.nombre} value={tipo.nombre}>{tipo.nombre}</option>
                        )
                    })}            
            </select>

            <label>Seleccionar origen data </label> 
            <select id="origen" onChange={handleOrigen}>
                <option value="I">Seleccionar</option>
                <option value="API">API</option>
                <option value="BDD">BDD</option>
            </select>

            <button onClick={handleClear}>Limpiar selelccion</button>



            <Cards />
            
        </div>
    )
};

export default Home;