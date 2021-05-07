import React,{useState} from 'react';
import uniqid from 'uniqid'

const NameList=()=>{

    const [nombre,setNombre]= useState('');
    const [listNames,setListNames]=useState([]);
    const [edit,setEdit]=useState(false);
    const [id,setId]=useState('');
    const [error,setError]=useState(null)


    const addName=(e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            console.log('ERROR');   
            setError('Error, el campo está vacío!!')
            return
        }else{

            setError(null)
        }
        const newName={
            id:uniqid(),
            tituloNombre:nombre
        }
       
        setListNames([...listNames,newName]);
        setNombre('');
    }

    const deleteName=(id)=>{
        const newList= listNames.filter(item=>item.id!==id);
        setListNames(newList);
    }

    const editFunct=(item)=>{
        setEdit(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }
    const addEditName=(e)=>{
        e.preventDefault()
        const newList=listNames.map(item=>item.id===id ? {id:id,tituloNombre:nombre}: item)
        setListNames(newList)
        setEdit(false);
        setNombre('');

    }
    return(
        <div>

            <div className="row" >
                
                <div className="col">
                    <h2>Formulario para añadir</h2>
                    <form onSubmit={edit? addEditName:addName} className="form-group">
                        <input 
                        className="form-control mb-3"
                        onChange={(e)=>{setNombre(e.target.value)}} 
                        value={nombre} type="text" 
                        placeholder="Añadir nombre" 
                        />
                        <input 
                        className="form-control btn btn-info btn-block" 
                        type="submit" 
                        value={edit?  'Edit': 'Registrar'}/>
                        

                    </form>
                    {error!=null?(
                        <div className="alert alert-danger">{error}</div>
                    ):
                    <div></div>}
                </div>

                <div className="col">
                    <h2>Listado de nombres</h2>

                    <ul className="list-group">
                        {
                            listNames.map(item=> 
                            <li key={item.id} className="list-group-item">
                                {item.tituloNombre}
                                <button 
                                className="btn btn-danger float-right" 
                                onClick={()=>{deleteName(item.id)}}>
                                    Delete
                                </button>
                                <button 
                                className="btn btn-info float-right mr-3" 
                                onClick={()=>{editFunct(item)}}>
                                    Edit
                                </button>
                            </li>
                            )
                        }
                      
                      
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default NameList;