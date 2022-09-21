import React, {FC} from "react";
import s from "../PokemonInfo.module.scss"

type PropsType = {
    skillName: string
}

export const SkillItem: React.FC<PropsType> = ({skillName}) => {
    return <div className={s.skillItemWrapper}>
            <span>{skillName}</span>
        </div>
}