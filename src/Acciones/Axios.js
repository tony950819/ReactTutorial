
import axios from 'axios';
import {pokemonApi} from '../Modelos/Constantes'
export async function ObtienePokemon() {
    const resultado = axios.get(pokemonApi);
    return resultado;
}