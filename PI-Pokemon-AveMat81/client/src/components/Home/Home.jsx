import Cards from "../Cards/Cards";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderCardsAtaque, orderCardsNombre, getTipos, filterByTipos, filterByOrigen } from "../../Redux/actions";
import styles from './Home.module.css'

const Home = ()=> {
    const allPokemons = useSelector(state=>state.filterPokemon)
    const types = useSelector(state=>state.types)
    const [ordenAtaque, setOrdenAtaque] = useState(null);
    const [ordenNombre, setOrdenNombre] = useState(null);
    const [filterTipos, setFilterTipos] = useState(null);
    const [filterOrigen, setFilterOrigen] = useState(null);
   // const [aux, setAux] = useState(false)
    const dispatch = useDispatch();

    useEffect(()=>{
      if(!allPokemons.length) dispatch(getPokemons());
      if(!types.length)dispatch(getTipos())
      if(filterTipos) dispatch(filterByTipos(filterTipos));
      if(filterOrigen) dispatch(filterByOrigen(filterOrigen));
      if(ordenAtaque) dispatch(orderCardsAtaque(ordenAtaque));
      if(ordenNombre) dispatch(orderCardsNombre(ordenNombre));
    },[dispatch, filterOrigen, filterTipos, ordenAtaque, ordenNombre]);

    const handleOrder = (event)=>{
       // dispatch(orderCardsAtaque(event.target.value))
        //setAux(!aux)
         setOrdenAtaque(event.target.value)
    };

    const handleNombre = (event)=>{
       // dispatch(orderCardsNombre(event.target.value))
        //setAux(!aux)
        setOrdenNombre(event.target.value)
    };

    const handleTipos = (event) => {
        setFilterTipos(event.target.value)
    }
    const handleOrigen = (event) => {
        setFilterOrigen(event.target.value)
    }

    return(
        
        <div className={styles.div}>
            <label>Orden por ataque </label>
            <select id="orden"  onChange={handleOrder}>
                <option value="I">Seleccionar</option>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>

            <label>Orden por nombre </label>
            <select id="nombres"  onChange={handleNombre}>
                <option value="I">Seleccionar</option>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
            </select>

            <label>Seleccionar por tipo </label> 
            <select id="tipos" onChange={handleTipos}>
             <option value="I">Seleccionar</option>
                   { types.map((tipo)=> {
                        return (
                            <option value={tipo.nombre}>{tipo.nombre}</option>
                        )
                    })}            
            </select>

            <label>Seleccionar origen data </label> 
            <select id="origen" onChange={handleOrigen}>
                <option value="I">Seleccionar</option>
                <option value="API">API</option>
                <option value="BDD">BDD</option>
            </select>



            <Cards />
            
        </div>
    )
};

export default Home;