import React,{useEffect,useState} from 'react';
import {ObtienePokemonEspecifico} from '../Acciones/Axios'
export function Detalle (item) {
    
    const [habilidades,ActualizarHabilidades] =useState(new Array());
    let array =[];
    useEffect(() => {
        
        const obtenerPoekmons = async function () {
            await ObtienePokemonEspecifico(item.dataItem.id).then((respuesta) => {
                console.log(respuesta.data);
                ActualizarHabilidades(respuesta.data.types)
                
           }).catch(error => {
           });
       }
       obtenerPoekmons();
    
    },[]);

    
    const Pintar =()=>{
        if(habilidades.length>0) {
            habilidades.map((dato,index)=>{
                array.push(<li>{dato.slot}</li>);
             })
        }
    
        return(
            <>
            <ul>
                {array}

            </ul>
            </>
        )
    }
    return (
        <>
          {Pintar()}
           
        </>
    )
}

export default Detalle;