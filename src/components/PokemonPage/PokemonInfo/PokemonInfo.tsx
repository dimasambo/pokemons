import {FC} from "react";
import {MoveType, PokemonType, StatType} from "../../../types/types";
import s from "./PokemonInfo.module.scss"
import {SkillItem} from "./SkillItem/SkillItem";

type PropsType = {
    pokemon: PokemonType | null
}

export const PokemonInfo: FC<PropsType> = ({pokemon}) => {
    return <div className={s.pokemonInfoWrapper}>
        <div className={s.pokemonPhotoBox}>
            <img src={pokemon?.sprites.front_default}/>
            <div className={s.pokemonLogin}>
                <span>{pokemon?.name}</span>
            </div>
        </div>
        <div className={s.mainPokemonInfoBox}>
            <div className={s.skillBox}>
                <p>Moves</p>
                <div className={s.skillsItemsBox}>
                    {
                        pokemon?.moves.map((move: MoveType) =>
                            <SkillItem key={move.move.url.substr(31)} skillName={move.move.name}/>)
                    }
                </div>
            </div>
            <div className={s.skillBox}>
                <p>Stats</p>
                <div className={s.skillsItemsBox}>
                    {
                        pokemon?.stats.map((stat: StatType) =>
                            <SkillItem key={stat.stat.url.substr(31)} skillName={stat.stat.name}/>)
                    }
                </div>
            </div>
        </div>
    </div>
}