
import axios from 'axios';
import {pokemonApi,pokemonApiEspecifico} from '../Modelos/Constantes'

export async function ObtienePokemon() {
    const resultado = axios.get(pokemonApi);
    return resultado;
}
export async function ObtienePokemonEspecifico(id) {
    const resultado = axios.get(pokemonApiEspecifico(id));
    return resultado;
}