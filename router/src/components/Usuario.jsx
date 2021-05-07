import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Usuario =()=>{

    const {id}=useParams()
    const [user,setUser]=useState('');

    const obtainUser=async()=>{
        const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users=await res.data
        setUser(users)

    }
    
    useEffect(()=>{

       obtainUser()

    })

    return(
        <Fragment>
            <h3>Esto es una base</h3>   
            <p>Nombre usuario: {user.name}</p> 
            <p>Correo: {user.email}</p>
            <small>Telefono: {user.phone}</small>
            <p>{id}</p>
        </Fragment>
    )
}

export default Usuario;