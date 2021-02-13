import React, { Component } from 'react';
import {ObtienePokemon} from '../Acciones/Axios'

export class Home extends Component{


    constructor(props) {
        super(props);
        this.state = {
            pokemones:[]
        }
    }
    componentDidMount(){
        this.ObtienePokemons();
    }

    ObtienePokemons = () => {
        ObtienePokemon().then((respuesta) => {
            this.setState({
                pokemones:respuesta.data.results
            })
        }).catch(error => {
            console.log(error);
            
        });
       
    }
    ConsultaDetalle =(dato) => {

    }

    InsertaDatoEnLista (dato){
     
        let resultado=
        <div style={{marginTop:"5px"}}>
          <button onClick={this.ConsultaDetalle(dato.url)}>{dato.name}</button>
          </div>
        ;
        return resultado;
    } 
    PintaDinamicamente () {
        let jskPokemones=[];
        this.state.pokemones.map(dato=>{
            jskPokemones.push(this.InsertaDatoEnLista(dato));
        })
        return (
            jskPokemones
        )
        
    }
    render() {
        console.log("render");
        return (
            <>
               <h1>Componente tipo clase con pokemones</h1>
                {this.PintaDinamicamente()}
               
               
            </>
        )
    }
}