import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home} from './componentes/Home';
import {GridCarros} from './componentes/Grid'
import  PruebaUseEffect from './componentes/PruebaUseState'
const Rutas = () => {
    return (
        <Switch>
            <Route  component={GridCarros} exact path="/"/>
         
         </Switch>
    )
}

export default Rutas;