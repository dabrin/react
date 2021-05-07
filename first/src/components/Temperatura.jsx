
import React, {useState}from 'react';


const Temperatura = ()=>{
    const [temp,setTemp]=useState(19);

    const subir=()=>{
        setTemp(temp+1);
    }
    
    const bajar=()=>{
        setTemp(temp-1);
    }
    return(

        <div className="container">
            <h2>
                La temperatura es: {temp}
            </h2>
            <p>
                {temp>=21?'hace calor':'hace frio'}
            </p>
            <button className="btn btn-danger btn-block" onClick={subir}>Aumentar Temp</button>
            <button className="btn btn-primary btn-block" onClick={bajar}>Dismunuir Temp</button>

        </div>
    )
}

export default Temperatura;
