import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PokemonType} from "../../types/types";
import {requestAllTypes, requestPokemon, requestPokemonsGeneralInfo} from "../../Redux/pokemons/pokemons-reducer";
import {Search} from "./Search/Search";
import {Pokemons} from "./Pokemons/Pokemons";
import {AppStateType} from "../../Redux/redux-store";
import {Pagination} from "./Pagination/Pagination";
import {TypesDropdown} from "./TypesDropdown/TypesDropdown";

export const PokemonsPage: FC = () => {

    const [isOptionClicked, setIsOptionClicked] = useState(false)

    const pokemonsGeneralInfo = useSelector((state: AppStateType) => state.pokemons.generalPokemonsInfo)
    const pokemons = useSelector((state: AppStateType) => state.pokemons.pokemons)
    const currentType = useSelector((state: AppStateType) => state.pokemons.currentType)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestPokemonsGeneralInfo())
        // @ts-ignore
        dispatch(requestAllTypes())
    }, [])

    useEffect(() => {
        if (pokemonsGeneralInfo.length !== 0) {
            pokemonsGeneralInfo.forEach(pokemon => {
                // @ts-ignore
                dispatch(requestPokemon(pokemon.url));
            })
        }
    }, [pokemonsGeneralInfo])

    const [searchedPokemons, setSearchedPokemons] = useState<Array<PokemonType>>([])
    const [filteredPokemons, setFilteredPokemons] = useState<Array<PokemonType>>([])

    useEffect(() => {
        setSearchedPokemons(pokemons)
    }, [pokemons])

    return <div style={{margin: "10px"}}>
        <Search pokemons={pokemons} setSearchedPokemons={setSearchedPokemons}/>
        <TypesDropdown pokemons={searchedPokemons}
                       setPokemons={setFilteredPokemons}
                       setIsOptionClicked={setIsOptionClicked}/>
        <Pokemons
            pokemons={currentType !== 'Select Type...' ?
                (isOptionClicked ? filteredPokemons : searchedPokemons)
                : searchedPokemons}/>
        <Pagination/>
    </div>
}