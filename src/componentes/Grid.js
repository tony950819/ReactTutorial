import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';



export function GridCarros(datos) {

    return (
        <>
            <Grid
                detail={DetalleGrid}
                data={datos.listaCarros.slice(datos.salto, datos.cantRegistros + datos.salto)}
                scrollable="scrollable"
                selectedField="selected"
                filterable
                pageable={true}
                filter={datos.filtro}
                total={datos.listaCarros.length}
                style={{ height: datos.altoGrid, width: datos.anchoGrid }}
                skip={datos.salto}
                take={datos.cantRegistros}
                onPageChange={datos.alCambiarPagina}
                onFilterChange={datos.alCambiarFiltro}
                onSelectionChange={datos.alSeleccionarRegistro}
                onHeaderSelectionChange={datos.alSeleccionarTodos}
                onRowClick={datos.alSeleccionarRegistro}
                expandField="expanded"
                onExpandChange={datos.expandirDetalle}
            >
                {ColumnaDeSeleccion(datos)}
                <Column field="placa" width={"auto"} title="Placa" filter="text" />
                <Column field="color" width={"auto"} title="Color" filter="text" />
                <Column field="marca" width={"auto"} title="Marca" filter="text" />
                <Column field="descripcionMarca" width={"auto"} title="Descripción marca" filter="text" />
            </Grid>
        </>
    );
}

function ColumnaDeSeleccion(datos: PropiedadesGrid) {
    return (<Column
        locked
        field="selected"
        title=" "
        width="40px"
        key="seleccionGrid"
        filterable={false}
        headerSelectionValue={
            datos.listaCarros.findIndex(dataItem => dataItem.selected === false) === -1} />
    )
}