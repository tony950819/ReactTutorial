import React,{useEffect,useState} from 'react';
import {ObtienePokemon} from '../Acciones/Axios'



export function MuestraPantalla () {

    const[data,actualizaLista] =useState([]);

    useEffect(() => {
        alert("v1");
        ObtienePokemon().then((respuesta) => {
            actualizaLista({
                data:respuesta.data
            })
        }).catch(error => {
            console.log(error);
            
        });

    },[]);

    console.log(data)
    return (
     
        <>
          <h1>hola</h1>
        </>
    ) 
    
}
