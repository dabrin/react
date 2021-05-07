
import React, {useState} from 'react';

const Form =()=>{
    const [nombre,setNombre]=useState("");
    const [edad,setEdad]=useState("")

    const validar =(event)=>{
        event.preventDefault();
        console.log("HOLA");
        if(!nombre.trim()){
            console.log("ESTO ESTÁ MAL");
            //return
        }
        if(!edad.trim()){
            console.log("LLENA LA EDAD");
            //return
        }
    }

    return(
        <div className="container">
            <form onSubmit={validar} className="form-group">
                <input
                    placeholder="Nombre"
                    className="form-control mb-3" 
                    type="text"
                    onChange={(e)=>{setNombre(e.target.value)}}
                    />
                <input
                    placeholder="Edad" 
                    className="form-control mb-3" 
                    type="number"
                    onChange={(e)=>{setEdad(e.target.value)}}
                    />
                <input  className="btn btn-success mb-3" type="submit"/>
            </form>


            <label>
                Este es mi nombre: {nombre}
            </label>
            <br></br>
            <label>
                Esta es mi edad: {edad}
            </label>

        </div>
    )
}

export default Form