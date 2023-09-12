import { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { getTipos } from '../../Redux/actions';




const Form = ()=> {

    const types = useSelector(state=>state.types);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!types.length)dispatch(getTipos())
    },[dispatch]);

    const [form, setForm] = useState({
        nombre: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        tipo1: "",
        tipo2: ""
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
        tipo1: "",
        tipo2: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        let value = event.target.value;

        validate(property, value)

        setForm({...form, [property]: value})
        
    }

    const validate = (property, value) => {
       let error = "";

        switch (property) {
            case "nombre":
                if(value.length < 1){
                        error = "El nombre no puede estar vacio"            
                    
                    }else if(/\s/.test(value)){
                        error = "El nombre no puede contener espacios"
                    
                    }else if(value.length > 20){
                       error = "El nombre no puede contener mas de 20 caracteres"
                    
                    }
                break;
                
            case "imagen":
                if(!/\.(jpg|jpeg)$/i.test(value)){
                    error = "Debe ingresar una url valida"
                    
                }
                break;

            case "vida":
                if(isNaN(value)){
                    error = "El valor debe ser un  número"
                    
                }
                break;
            
            case "ataque":
                if(isNaN(value)){
                    error = "El valor debe ser un  número"
                    
                }
                break;
            
            case "defensa":
                if(isNaN(value)){
                    error = "El valor debe ser un  número"
                    
                }
                break;

            case "velocidad":
                if(isNaN(value)){
                    error = "El valor debe ser un  número"
                    
                }
                break;

            case "altura":
                if(isNaN(value)){
                    error = "El valor debe ser un  número"
                    
                }
                break;

            case "peso":
                if(isNaN(value)){
                    error = "El valor debe ser un  número"
                    
                }
                break;
        
            default:
                break;
        }

        setErrors({...errors, [property]: error})
                       
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(errors.nombre === "" || errors.imagen === "" || errors.vida === "" || errors.ataque === "" || errors.defensa === "" || (errors.tipo1 === "" && errors.tipo2 === "")){
            alert("Revise los datos ingresados")
            return
        }
        axios.post("http://localhost:3001/pokemons/",form)
        .then(res=>{
            setForm({
                nombre: "",
                imagen: "",
                vida: "",
                ataque: "",
                defensa: "",
                velocidad: "",
                altura: "",
                peso: "",
                tipo1: "",
                tipo2: ""
            })
            const response = res.data
            alert(response)
        })
        .catch(()=>alert("El pokemon no pudo ser creado"))
        
    }

    return(        
      <div>
        <h1>Crea tu propio Pokemon!</h1>

        <br /> 

        <h6>(Los campos marcados con * son abligatorios)</h6>
        <form onSubmit={submitHandler}>            

            <div>
                <label>* Nombre: </label>
                <input value={form.nombre} onChange={changeHandler} name="nombre" type="text"/>   
                {errors.nombre && <span>{errors.nombre}</span>}             
            </div>

            <br /> 

            <div>
                <label>* Imagen: </label>
                <input value={form.imagen} onChange={changeHandler} name="imagen" type="text" placeholder="Ej.:https://imagen.jpg" />
                {errors.imagen && <span>{errors.imagen}</span>}              
            </div>

            <br />

            <div>
                <label>* Vida: </label>
                <input value={form.vida} onChange={changeHandler} name="vida" type="text" />
                {errors.vida && <span>{errors.vida}</span>}              
            </div>

            <br />

            <div>
                <label>* Ataque: </label>
                <input value={form.ataque} onChange={changeHandler} name="ataque" type="text" /> 
                {errors.ataque && <span>{errors.ataque}</span>}               
            </div>

            <br />
           
            <div>
                <label>* Defensa: </label>
                <input value={form.defensa} onChange={changeHandler} name="defensa" type="text" />  
                {errors.defensa && <span>{errors.defensa}</span>}              
            </div>

            <br />
            
            <div>
                <label>Velocidad: </label>
                <input value={form.velocidad} onChange={changeHandler} name="velocidad" type="text" />
                {errors.velocidad && <span>{errors.velocidad}</span>}           
            </div>

            <br />
           
            <div>
                <label>Altura: </label>
                <input value={form.altura} onChange={changeHandler} name="altura" type="text" />
                {errors.altura && <span>{errors.altura}</span>}
            </div>

            <br />
           
            <div>
                <label>Peso: </label>
                <input value={form.peso} onChange={changeHandler} name="peso" type="text" />
                {errors.peso && <span>{errors.peso}</span>}             
            </div>

            <br />
           
            <div>
            <label>Seleccionar 1° tipo </label> 
            <select id="tipos" onChange={changeHandler} name='tipo1'>
             <option>Seleccionar</option>
                   { types.map((tipo)=> {
                        return (
                            <option value={tipo.id}>{tipo.nombre}</option>
                        )
                    })}            
            </select>                
            </div>

            <br />

            <div>
            <label>Seleccionar 2° tipo </label> 
            <select id="tipos" onChange={changeHandler} name='tipo2'>
             <option value="I">Seleccionar</option>
                   { types.map((tipo)=> {
                        return (
                            <option value={tipo.id}>{tipo.nombre}</option>
                        )
                    })}            
            </select>                
            </div>

            <br />

            <button type="submit">ENVIAR</button>
        </form>
      </div>
    )
};

export default Form;