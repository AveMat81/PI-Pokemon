import { useState } from "react";


const SearchBar = ({onSearch}) =>{

    const [id, setId] = useState('');
 
    const handleChange = (event)=>{
       setId(event.target.value)
    };
 
    return (
       <div>
          <input  type='search' value={id} onChange={handleChange}/> 
          <button >Buscar</button>
       </div>
    );
 }
 
 export default SearchBar