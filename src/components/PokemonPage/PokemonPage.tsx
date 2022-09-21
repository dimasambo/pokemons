import {FC} from "react";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";
import {PokemonInfo} from "./PokemonInfo/PokemonInfo";
import s from "./PokemonPage.module.scss"
import {getPokemons} from "../../Redux/pokemons/pokemons-selector";
import {PokemonType} from "../../types/types";

export const PokemonPage: FC = () => {

    const history = useHistory();
    const pokemonName: string = history.location.pathname.substr(9) //delete "/pokemon/" (9 symbols)

    const pokemons = useSelector(getPokemons)
    let pokemon: PokemonType | null = null
    if(pokemons) {
        pokemon = pokemons.filter(pokemon => pokemon.name == pokemonName)[0]
    }

    return <div className={s.pokemonPageWrapper}>
        <PokemonInfo pokemon={pokemon}/>
    </div>
}