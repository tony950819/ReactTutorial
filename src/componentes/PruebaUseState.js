import React,{useEffect,useState} from 'react';

const PruebaUseEffect = () => {
    const [contador,actualizaContador]=useState(0);

    useEffect(() => {
        seEjecutaEfecto(contador);
    },[contador]);

    return (
        <>
            <h1>{contador}</h1>
            <button onClick={(f)=>{actualizaContador(contador+1)}}>Boton para aumentar</button>
        </>

    )
}
const seEjecutaEfecto  =(contador) => {
    console.log("se ejecutaEfecto",contador);
}

export default PruebaUseEffect;