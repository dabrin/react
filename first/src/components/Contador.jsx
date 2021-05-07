import React,{Fragment,useState} from 'react';

export const Contador=()=>{
    let conta=1;
    
    const[numero,setNumero]= useState(0);
    const aumentar=()=>{
        setNumero(numero+1)
    }

    const dismunuir =()=>{
        setNumero(numero-1)
    }

    return(
        <Fragment>
            

            <button onClick={aumentar}>+</button>
            <label>{numero}</label>
            <button onClick={dismunuir}>-</button>
        </Fragment>
    )
}
export default Contador;