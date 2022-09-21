import {AppStateType} from "./../redux-store";

export const getPokemonsGeneralInfo = (state: AppStateType) => {
    return state.pokemons.generalPokemonsInfo;
}

export const getPokemons = (state: AppStateType) => {
    return state.pokemons.pokemons;
}