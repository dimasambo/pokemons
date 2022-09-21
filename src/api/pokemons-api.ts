import axios from "axios";
import {AllPokemonsType, IAllTypes, PokemonType} from "../types/types";


export const pokemonsAPI = {
    getAllGeneralPokemonsInfo(url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`) {
        return axios
            .get<AllPokemonsType>
            (url)
            .then(responce => responce.data)
    },

    getPokemon(url: string) {
        return axios.get<PokemonType>(url)
            .then(responce => responce.data)
    },

    getAllTypes() {
        return axios.get<IAllTypes>(`https://pokeapi.co/api/v2/type`)
            .then(responce => responce.data)
    }
}