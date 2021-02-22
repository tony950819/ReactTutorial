import React,{useEffect,useState} from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import   '@progress/kendo-theme-material/dist/all.css';
import {ObtienePokemon} from '../Acciones/Axios'
import {Detalle} from '../componentes/Detalle';
import { filterBy } from "@progress/kendo-data-query";
export function GridCarros() {

    const [filtro,actualizaFiltro]=useState({filtro:undefined,cantidadReg:5,salto:0})
    const [datos,actualizaDatos]=useState({datosGrid:[],datosCopia:[]});
    

    const alCambiarPagina = (event) => {
        actualizaFiltro({
            salto: event.page.skip,
            cantidadReg:event.page.take
        })
    }

    const expandirDetalle =(event) =>{
        event.dataItem.expanded = !event.dataItem.expanded;
        let indice=datos.datosGrid.findIndex(dato=>dato.id==event.dataItem.id);
        datos.datosGrid[indice]=event.dataItem;

        let indiceCopia=datos.datosCopia.findIndex(dato=>dato.id==event.dataItem.id);
        datos.datosCopia[indiceCopia]=event.dataItem;

        actualizaDatos({
            datosGrid:datos.datosGrid,
            datosCopia:datos.datosCopia
        })
      
        
    }

    
    const alCambiarFiltro = (event) => {
        let resultado= ObtengaDatosFiltrados(event.filter, datos.datosCopia)
        actualizaFiltro({
            filtro:event.filter,
            cantidadReg:5,
            salto:0
        }) 
        actualizaDatos({
            datosGrid:resultado,
            datosCopia:datos.datosCopia
        })
      


    }
    const ObtengaDatosFiltrados = (filtro, copiaDatos)  =>{
        return filterBy(copiaDatos, filtro);
    }

    useEffect(() => {
        
        const obtenerPoekmons = async function () {
            await ObtienePokemon().then((respuesta) => {
                let resultado = respuesta.data.results.map((result,indice) => Object.assign({ selected: false,expanded:false,id:indice }, result));
               
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


    const ColumnaDeSeleccion = ()=> {
        return (<Column
            locked
            field="selected"
            title=" "
            width="50px"
            key="seleccionGrid"
            filterable={false}
            headerSelectionValue={
                datos.datosGrid.findIndex(dataItem => dataItem.selected === false) === -1} />
        )
    }

    return(
        <>
        
        <Grid
                detail={Detalle}
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
                expandField="expanded"
                onExpandChange={expandirDetalle}
                onFilterChange={alCambiarFiltro}
                
            >

                {ColumnaDeSeleccion()}
                <Column field="name" width={"auto"} title="Nombre" filter="text" />
                <Column field="url" width={"auto"} title="url" filter="text" />
            </Grid>
        </>
       
    )
}
