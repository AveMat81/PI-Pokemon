import { NavLink } from 'react-router-dom';

const Landing = ()=> {
    return(
        <div>
            <h1>Bienvenidos a mi APP POKEMON</h1>
            <NavLink to='/home'>
                <button>Inicio</button>
            </NavLink>
        </div>
    )
};

export default Landing;