import {AllPokemonsType, IAllTypes, IType, PokemonGeneralInfoType, PokemonType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {pokemonsAPI} from "../../api/pokemons-api";

const initialState = {
    generalPokemonsInfo: [] as Array<PokemonGeneralInfoType>,
    pokemons: [] as Array<PokemonType>,
    nextPage: null as string | null,
    prevPage: null as string | null,
    types: [] as Array<IType>,
    currentType: 'Select Type...'
}

export type InitialStateType = typeof initialState

const pokemonsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "POKEMONS/SET_GENERAL_POKEMONS_INFO":
            return {
                ...state,
                generalPokemonsInfo: action.payload.generalPokemonsInfo
            }
        case "POKEMONS/SET_POKEMONS":
            return {
                ...state,
                pokemons: state.pokemons.length < 20
                    ? [...state.pokemons, action.payload.pokemon]
                    : [action.payload.pokemon]
            }
        case "POKEMONS/SET_NEXT_PAGE":
            return {
                ...state,
                nextPage: action.payload.nextPage
            }
        case "POKEMONS/SET_PREV_PAGE":
            return {
                ...state,
                prevPage: action.payload.prevPage
            }
        case "POKEMONS/SET_ALL_TYPES":
            return {
                ...state,
                types: action.payload.types
            }
        case "POKEMONS/SET_CURRENT_TYPE":
            return {
                ...state,
                currentType: action.payload.type
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setAllGeneralPokemonsInfo: (generalPokemonsInfo: Array<PokemonGeneralInfoType>) => (
        {
            type: 'POKEMONS/SET_GENERAL_POKEMONS_INFO',
            payload: {generalPokemonsInfo}
        } as const
    ),
    setPokemon: (pokemon: PokemonType) => (
        {
            type: 'POKEMONS/SET_POKEMONS',
            payload: {pokemon}
        } as const
    ),
    setNextPage: (nextPage: string | null) => (
        {
            type: 'POKEMONS/SET_NEXT_PAGE',
            payload: {nextPage}
        } as const
    ),
    setPrevPage: (prevPage: string | null) => (
        {
            type: 'POKEMONS/SET_PREV_PAGE',
            payload: {prevPage}
        } as const
    ),
    setAllTypes: (types: Array<IType>) => (
        {
            type: 'POKEMONS/SET_ALL_TYPES',
            payload: {types}
        } as const
    ),
    setCurrentType: (type: string) => (
        {
            type: 'POKEMONS/SET_CURRENT_TYPE',
            payload: {type}
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const requestPokemonsGeneralInfo = (url: string): ThunkType => {
    return async (dispatch) => {
        const data: AllPokemonsType = await pokemonsAPI.getAllGeneralPokemonsInfo(url);
        dispatch(actions.setAllGeneralPokemonsInfo(data.results));
        dispatch(actions.setNextPage(data.next));
        dispatch(actions.setPrevPage(data.previous));
    }
}

export const requestPokemon = (url: string): ThunkType => {
    return async (dispatch) => {
        const data: PokemonType = await pokemonsAPI.getPokemon(url);
        dispatch(actions.setPokemon(data));
    }
}

export const requestAllTypes = (): ThunkType => {
    return async (dispatch) => {
        const data: IAllTypes = await pokemonsAPI.getAllTypes();
        dispatch(actions.setAllTypes(data.results));
    }
}

export default pokemonsReducer;