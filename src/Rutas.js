import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home} from './componentes/Home';

const Rutas = () => {
    return (
        <Switch>
            <Route  component={Home} exact path="/"/>
         </Switch>
    )
}

export default Rutas;