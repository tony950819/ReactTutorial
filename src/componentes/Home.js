import React, { Component } from 'react';
import {ObtienePokemon} from '../Acciones/Axios'
export class Home extends Component{


    constructor(props) {
        super(props);
        this.state = {
            casa:"casa nueva"
        }
    }
    componentDidMount(){
        this.ObtienePokemons();
    }

    ObtienePokemons = () => {
        ObtienePokemon().then((respuesta) => {
            console.log(respuesta.data);
        }).catch(error => {
            console.log(error);
            
        });
       
    }
    render() {
        return (
            <>
               <h1>Componente tipo clase:{this.state.casa} </h1>
               
            </>
        )
    }
}