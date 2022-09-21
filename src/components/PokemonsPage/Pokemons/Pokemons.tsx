import {PokemonType} from "../../../types/types";
import {FC} from "react";
import {PokemonCard} from "./PokemonCard/PokemonCard";
import {Link} from "react-router-dom";
import s from "./PokemonCard/PokemonCard.module.scss";


type UsersPropsType = {
    pokemons: Array<PokemonType>
}

export const Pokemons: FC<UsersPropsType> = ({pokemons}) => {
    return <div className={s.pokemonsWrapper}>
        {
            pokemons.map(pokemon =>
                <Link key={pokemon.id} className={s.pokemonCardWrapperLink} to={'/pokemon/' + pokemon.name}>
                    <PokemonCard pokemon={pokemon}/>
                </Link>
            )
        }
    </div>
}