import { Link } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({id, nombre, imagen, tipos})=>{
    return(
    <Link to={`/detail/${id}`}>        
        <div className={styles.card}>           
            <h1>{nombre}</h1>            
            <img className={styles.img} src={imagen} alt={nombre} />
            <div>
             <h4>{tipos}</h4>             
            </div>           
        </div>
    </Link>
    )
};

export default Card;