import React,{Fragment,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';





const Usuarios=()=>{
    const[usersArr,setUsersArr]= useState([]);

    const obtenerUsuarios =async()=>{
        const res= await axios.get('https://jsonplaceholder.typicode.com/users')
        const users=await res.data
        setUsersArr(users)
    
    }

    useEffect(()=>{
        obtenerUsuarios()
    },[])
   
    return(
        <Fragment>
            <h3>
                Esto es el componente de Usuarios
            </h3>

            <ol>
                {
                    usersArr.map((item)=>(
                        <li key={item.id}>
                            <Link to={`/usuario/${item.id}/`}>{item.name}</Link>
                        </li>
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default Usuarios
