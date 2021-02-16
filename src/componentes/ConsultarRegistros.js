import React,{useEffect,useState} from 'react';
import {ObtienePokemon} from '../Acciones/Axios'


export function ConsultarRegistros () {

    const[data,actualizaLista] =useState([]);
    useEffect(() => {
        
        
         const obtenerPoekmons = async function () {
            await ObtienePokemon().then((respuesta) => {
               actualizaLista({
                   data:respuesta.data.results
               })
           }).catch(error => {
               console.log(error);
               
           });
       }
       obtenerPoekmons();
     
    
    },[]);
    
    return data;
    
}

export default ConsultarRegistros;