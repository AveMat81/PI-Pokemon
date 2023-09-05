import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css'


const Landing = ()=> {
    return(
        <div className={styles.background}>            
         
            <NavLink to='/home'>
              <button className={styles.landing}>Inicio</button>
            </NavLink>

        </div>
    )
};

export default Landing;