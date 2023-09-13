import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById, clearDetail } from "../../Redux/actions";
import styles from './Detail.module.css'

const Detail = ()=> {
    const {id} = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector(state=>state.detailPokemon)


    useEffect(() => {
        dispatch(getPokemonById(id));
        return () => {
        dispatch(clearDetail())
        };
    }, [dispatch, id]);

    return(
        <div className={styles["detail-container"]}>            
            <div className={styles["izq"]}>
             <h4 className={styles.id}>{pokemon.id}</h4>
             <h1 className={styles.nombre}>{pokemon.nombre}</h1>
             <img className={styles.imagen} src={pokemon.imagen} alt="" />
             <h2 className={styles.tipos}>{pokemon.tipos}</h2>
            </div>
            <div className={styles["der"]}>
             <h2 className={styles.stats}>Vida: {pokemon.vida}</h2>
             <h2 className={styles.stats}>Ataque: {pokemon.ataque}</h2>
             <h2 className={styles.stats}>Defensa: {pokemon.defensa}</h2>
             <h2 className={styles.stats}>Velocidad: {pokemon.velocidad}</h2>
             <h2 className={styles.stats}>Altura: {pokemon.altura}</h2>
             <h2 className={styles.stats}>Peso: {pokemon.peso}</h2>
            </div>
        </div>
    )
};

export default Detail;