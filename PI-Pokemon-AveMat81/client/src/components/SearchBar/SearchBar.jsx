import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Redux/actions";

const SearchBar = () =>{
  const dispatch = useDispatch();
   const [nombre, setNombre] = useState('');
 
   const handleChange = (event)=>{
      setNombre(event.target.value)
   };

    const searchName = () =>{
      dispatch(getPokemonByName(nombre))
   }
 console.log(nombre)
   return (
       <div>
          <input  type='search' value={nombre} onChange={handleChange} placeholder="Buscar por nombre"/> 
          <button  onClick={ ()=>searchName()}>Buscar</button>
       </div>
   );
}
 
 export default SearchBar;

