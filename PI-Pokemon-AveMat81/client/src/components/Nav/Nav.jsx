import { NavLink } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";


const Nav = ()=> {
    return(
        <nav>
            <SearchBar />
            
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
        </nav>
    )
};

export default Nav