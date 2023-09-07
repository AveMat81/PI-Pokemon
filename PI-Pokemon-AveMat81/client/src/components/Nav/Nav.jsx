import { NavLink } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';

const Nav = ()=> {
    return(
        <nav className={styles.navbar}>
            <div className={styles.searchbar}>
            <SearchBar/>
            </div>
            <NavLink to='/home'>
                <button className={styles.homebutton}>Inicio</button>
            </NavLink>

            <NavLink to='/create'>
                <button className={styles.button}>Crear un Pokemon</button>
            </NavLink>
        </nav>
    )
};

export default Nav