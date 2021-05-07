import './App.css';
import React from 'react';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {


  return (
    <Router >

      <Link to="/"> usuarios</Link>


      <Switch>
        <Route exact path="/">
            <Usuarios/>
        </Route>
        <Route  path="/usuario/:id/">
            <Usuario/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
