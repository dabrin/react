
import React,{Fragment,useState}from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {auth} from '../firebase.config';
import{useHistory} from 'react-router-dom'


const Login =()=>{

    const history=useHistory();
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [msgError,setMsgError]=useState('');

    const registerUser=(e)=>{
        e.preventDefault()
        
            auth.createUserWithEmailAndPassword(email,pass)
            .then(r=>history.push('/'))
            .catch(e=>
                {
                    if(e.code=='auth/invalid-email'){
                        setMsgError('Formato de Email incorrecto');
                    }
                    if(e.code=='auth/weak-password'){
                        setMsgError('La contraseña es muy corta debería tener 6 o más')
                    }
                    console.log(e);

                }
            );
    }

    const loginUser=()=>{
        auth.signInWithEmailAndPassword(email,pass)
        .then((r)=>history.push('/'))
        .catch((err)=>{

            if(err.code=='auth/wrong-password'){
                setMsgError('Contraseña incorrecta')
            }
            if(err.code=='auth/user-not-found'){
                setMsgError('Usuario no existe')
            }
            console.log(err.code)
        })
    }

return(
        <Fragment > 
        <div className="row mt-5" >
            
            <div className="col">

            </div>
            <div className="col">
                <form onSubmit={registerUser} className="form-group">
                    <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        } 
                        className="form-control"
                        placeholder="Ingrese el email"
                        type="email"
                    >
                    </input>

                    <input
                        onChange={
                            (e)=>{
                                setPass(e.target.value)
                            }
                        } 
                        className="form-control mt-3"
                        placeholder="Ingrese el password"
                        type="password"
                    >
                    </input>

                    <input
                        className="btn btn-dark btn-block mt-3"
                        type="submit"
                        value="Register"
                    >

                    </input>
                </form>
                <button
                    onClick={loginUser}
                    className="btn btn-success btn-block"
                >
                    Login
                </button>

                {
                msgError.trim()?(
                    <div className='alert alert-danger'>
                        {msgError}
                    </div>
                ):(
                    <span>

                    </span>
                )}
            </div>
            <div className="col">

            </div>
            </div>  
        </Fragment>
    )
}

export default Login