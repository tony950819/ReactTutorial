import React,{useEffect,useState} from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import   '@progress/kendo-theme-material/dist/all.css';
import {ObtienePokemon} from '../Acciones/Axios'
export function GridCarros() {

    const [filtro,actualizaFiltro]=useState({filtro:undefined,cantidadReg:5,salto:0})
    const [datos,actualizaDatos]=useState({datosGrid:[],datosCopia:[]});
    

    const alCambiarPagina = (event) => {
        actualizaFiltro({
            salto: event.page.skip,
            cantidadReg:event.page.take
        })
    }

    useEffect(() => {
        
        const obtenerPoekmons = async function () {
            await ObtienePokemon().then((respuesta) => {
                let resultado = respuesta.data.map(result => Object.assign({ selected: false }, result));
                actualizaDatos({
                    datosGrid:resultado,
                    datosCopia:resultado
               })
           }).catch(error => {
               console.log(error);
               
           });
       }
       obtenerPoekmons();
    
    },[]);

    return(
        <>
        
        <Grid
                data={datos.datosGrid.slice(filtro.salto,filtro.cantidadReg+filtro.salto)}
                scrollable="scrollable"
                selectedField="selected"
                filterable
                pageable={true}
                filter={filtro.filtro}
                total={datos.datosGrid.length}
                style={{ height: "600px", width: ""}}
                skip={filtro.salto}
                take={filtro.cantidadReg}
                onPageChange={alCambiarPagina}
                
            >

                <Column field="name" width={"auto"} title="Nombre" filter="text" />
                <Column field="url" width={"auto"} title="url" filter="text" />
            </Grid>
        </>
       
    )
}