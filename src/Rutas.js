import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home} from './componentes/Home';
import {MuestraPantalla} from './componentes/HomeHooks'
const Rutas = () => {
    return (
        <Switch>
            <Route  component={MuestraPantalla} exact path="/"/>
         
         </Switch>
    )
}

export default Rutas;