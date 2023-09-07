import { useState } from "react";
import axios from 'axios'

const Form = ()=> {

    const [form, setForm] = useState({
        nombre: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        altura: "",
        peso: "",
        tipos: ""
    })

    const [errors, setErrors] = useState({
        nombre: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        tipos: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        let value = event.target.value;

        if (property === 'tipos') {
            value = value.split(',').map(type => parseInt(type.trim(), 10)); // Convierte a números
        }
        if (property === 'vida' || property === 'ataque' || property === 'defensa' || property === 'altura' || property === 'peso') {
            value = parseFloat(value); // Convierte a número de punto flotante
        }
        
        validate({...form, [property]: value})

        setForm({...form, [property]: value})
        
    }

    const validate = (form) => {
        if(form.nombre.length !== 0){
            setErrors({...errors, nombre:""})
        }else{
            setErrors({...errors, nombre:"El nombre no puede estar vacio"})
        }
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/pokemons/",form)
        .then(res=>alert(res))
        .catch(errors=>alert(errors.message))
        
    }

    return(        
      <div>
        <h1>Crea tu propio Pokemon!</h1>
        <form onSubmit={submitHandler}>            

            <div>
                <label>Nombre: </label>
                <input value={form.nombre} onChange={changeHandler} name="nombre" type="text" placeholder="ejemplo" />   
                {errors.nombre && <span>{errors.nombre}</span>}             
            </div>

            <br /> 

            <div>
                <label>Imagen: </label>
                <input value={form.imagen} onChange={changeHandler} name="imagen" type="url" placeholder="ejemplo" />                
            </div>

            <br />

            <div>
                <label>Vida: </label>
                <input value={form.vida} onChange={changeHandler} name="vida" type="number" placeholder="ejemplo" />                
            </div>

            <br />

            <div>
                <label>Ataque: </label>
                <input value={form.ataque} onChange={changeHandler} name="ataque" type="number" placeholder="ejemplo" />                
            </div>

            <br />
           
            <div>
                <label>Defensa: </label>
                <input value={form.defensa} onChange={changeHandler} name="defensa" type="number" placeholder="ejemplo" />                
            </div>

            <br />
            
            <div>
                <label>Velocidad: </label>
                <input value={form.velocidad} onChange={changeHandler} name="velocidad" type="number" placeholder="ejemplo" />                
            </div>

            <br />
           
            <div>
                <label>Altura: </label>
                <input value={form.altura} onChange={changeHandler} name="altura" type="number" placeholder="ejemplo" />                
            </div>

            <br />
           
            <div>
                <label>Peso: </label>
                <input value={form.peso} onChange={changeHandler} name="peso" type="number" placeholder="ejemplo" />                
            </div>

            <br />
           
            <div>
                <label>Tipos: </label>
                <input value={form.tipos} onChange={changeHandler} name="tipos" type="text" placeholder="ejemplo" />                
            </div>

            <br />

            <button type="submit">ENVIAR</button>
        </form>
      </div>
    )
};

export default Form;