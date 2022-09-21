import {AllPokemonsType, PokemonType} from "../../../../types/types";
import {FC} from "react";
import s from "./PokemonCard.module.scss"

type UserPropsType = {
    pokemon: PokemonType
}

export const PokemonCard: FC<UserPropsType> = ({pokemon}) => {

    return <div className={s.pokemonCardWrapper}>
        <div className={s.pokemonCardImgBox}>
            <img src={pokemon.sprites.front_default}/>
        </div>
        <div className={s.pokemonCardNameBox}>
            <span>{pokemon.name}</span>
        </div>
    </div>
}