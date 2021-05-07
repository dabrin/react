
import React,{Fragment,useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {auth} from '../firebase.config';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const Menu =()=>{
    const history=useHistory();
    const[user,setUser]= useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user.email);
                console.log(user.email)
            }
        })
    },[])

    const logOut=()=>{
        setUser(null)
        auth.signOut()
        history.push('/')
    }


return(
        <Fragment>   
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className='navbar-nav nr-auto'>
                    <li className='nav-item'>
                        <Link className="nav-link" to='/'>
                              Inicio  
                        </Link>
                    </li>
                    {
                        !user?
                            (<li className='nav-item'>
                                <Link className="nav-link" to='/Login'>
                                    Login
                                </Link>
                            </li>
                            ):
                        (<span></span>)
                    }
                    {
                        !user?
                            (<li className='nav-item'>
                                <Link className="nav-link"  to='/Admin'>
                                    Admin
                                </Link>
                            </li>
                            ):
                        (<span></span>)
                    }
                    
                    
                </ul>
                {user?
                (
                <button 
                    onClick={logOut}
                    className="btn btn-danger">
                    Log Out                    
                </button>):
                (<span>

                </span>)}
            </nav>
        </Fragment>
    )
}

export default Menu