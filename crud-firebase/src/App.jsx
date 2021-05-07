import './App.css';
import React,{useState,useEffect} from 'react';
import {store} from './firebaseconfig'
function App() {
  const[editMode,setEditMode]=useState(null);
  const[idUsuario,setId]=useState('');
  const[name,setName]= useState('');
  const[phone,setPhone]= useState('');
  const[list,setList]= useState([]);
  const[error,setError]= useState('');

  const setUsers=async (e)=>{
    e.preventDefault();
    if(!name.trim()){
      setError('El campo de nombre está vacío!!!');
    }
    else if(!phone.trim()){
      setError('El campo del telefono está vacío!!!');
    }

    const usuario={
      nombre:name,
      telefono:phone
    }

    try {
      const data= await store.collection('agenda').add(usuario);
      const{docs}= await store.collection('agenda').get();//Object destructuring, para evitar un .docs en un futuro
      const newArr= docs.map(item=>({id:item.id,...item.data()}))
      setList(newArr)
      setName('');
      setPhone('');
      alert("SUCCESS")
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(()=>{
    const getUsers= async()=>{
      const{docs}= await store.collection('agenda').get();//Object destructuring, para evitar un .docs en un futuro
      const newArr= docs.map(item=>({id:item.id,...item.data()}))
      setList(newArr)
    }
    getUsers();
  },[])

  const deleteUser=async(id)=>{
    try {
      await store.collection('agenda').doc(id).delete();
      const{docs}= await store.collection('agenda').get();//Object destructuring, para evitar un .docs en un futuro
      const newArr= docs.map(item=>({id:item.id,...item.data()}))
      setList(newArr)
    } catch (e) {
      console.log(e);
    }
  }

  const updateUser=async(id)=>{
    try {
      const data=await store.collection('agenda').doc(id).get();
      const{nombre,telefono}=data.data();
      setName(nombre);
      setPhone(telefono);
      setId(id);
      setEditMode(true);
      //console.log()
    } catch (error) {
      console.log(error)
    }

  
  }

  const setUpdate=async(e)=>{
    e.preventDefault();
    if(!name.trim()){
      setError('El campo de nombre está vacío!!!');
    }
    else if(!phone.trim()){
      setError('El campo del telefono está vacío!!!');
    }

    const userUpdate={
      nombre:name,
      telefono:phone
    }

    try {
      await store.collection('agenda').doc(idUsuario).set(userUpdate);  
      const{docs}= await store.collection('agenda').get();//Object destructuring, para evitar un .docs en un futuro
      const newArr= docs.map(item=>({id:item.id,...item.data()}))
      setList(newArr);
      setName('');
      setPhone('');
      setEditMode(null);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5">
      <div  className="row">
            <div className="col">
              <h2>
                  Formulario de usuarios
              </h2>

              <form onSubmit={editMode? (setUpdate):(setUsers)} className="form-group">

                <input
                  onChange={(e)=>{setName(e.target.value)}}
                  className="form-control" 
                  placeholder="Introduzca el nombre"
                  type="text" 
                  value={name}
                  />

                <input 
                  onChange={(e)=>{setPhone(e.target.value)}}
                  className="form-control mt-3"
                  placeholder="Introduzca el numero"
                  type="text"
                  value={phone}
                  />
                <div className="d-grid gap-1">

                {editMode?( <input 
                  className="btn btn-dark  mt-3"
                  type="submit" 
                  value="Editar" />
                ):
                ( <input 
                  className="btn btn-dark  mt-3"
                  type="submit" 
                  value="Guardar" />
                )}
                 
                </div>
              </form>
              {error?
              (<div className="alert alert-danger">
                <p>{error}</p>
              </div>)
              :
              (<span>

              </span>)}
              </div>
            <div className="col">
              <h2>
                Lista de agenda
              </h2>
              <ul className="list-group ">
                {
                list.length!==0?
                (list.map(item=>(
                  <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>

                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{item.nombre}</div>
                        <b>Teléfono</b>: {item.telefono}
                      </div>
                      
                    <button onClick={(id)=>updateUser(item.id)}   className=" btn mr-3 btn-info "> Actualizar</button>
                    
                    <button onClick={(id)=>deleteUser(item.id)}   className=" btn mr-3 btn-danger float-end "> Eliminar</button>
                  </li>
                  
                )))
                :
                (<div className="alert alert-danger">
                  No hay datos
                </div>)
              
              
              }
              </ul>
            </div>
         </div>
    </div>
         
        );
}

export default App;
