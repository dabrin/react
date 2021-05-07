import React,{Fragment,useState} from 'react';


export const Listado=()=>{

    const [numeros,setNumeros]=useState([1,2,3,4,5,6,7])


    const recorrer=()=>{

    }
    return (
        <Fragment>
            <h4>Esto es una lista</h4>
            <ul>
                {
                    numeros.map(
                        (item,index)=>
                            <li key={index}>
                                {item}
                            </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado