import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {IType, PokemonType} from "../../../types/types";
import s from "./TypesDropdown.module.scss"
import {actions} from "../../../Redux/pokemons/pokemons-reducer";

type PropsType = {
    pokemons: Array<PokemonType>
    setPokemons: any
    setIsOptionClicked: any
}

export const TypesDropdown: FC<PropsType> = ({pokemons, setPokemons, setIsOptionClicked}) => {

    const [isDropped, setIsDropped] = useState(false)

    const dispatch = useDispatch()

    const types = useSelector((state: AppStateType) => state.pokemons.types)
    const currentType = useSelector((state: AppStateType) => state.pokemons.currentType)

    const onOptionClick = (e: any) => {
        dispatch(actions.setCurrentType(e.target.classList[1]));
        setIsOptionClicked(true)
        setIsDropped(false)
        setPokemons([])

        for (let i = 0; i < pokemons.length; i++) {
            for (let j = 0; j < pokemons[i].types.length; j++) {
                if (pokemons[i].types[j].type.name === e.target.classList[1]) {
                    setPokemons((arr: Array<PokemonType>) => [...arr, pokemons[i]])
                }
            }
        }
    }

    return <div className={s.dropdownWrapper}>
        <span onClick={() => {
            isDropped ? setIsDropped(false) : setIsDropped(true)
        }}>
            {currentType}
        </span>

        {
            isDropped && <div className={s.dropdownItemsWrapper}>
                <div className={s.dropdownItem}
                     onClick={() => {
                         dispatch(actions.setCurrentType('Select Type...'));
                         setIsDropped(false)
                     }}>
                    {'Select Type...'}
                </div>
                {
                    types.map((type: IType) =>
                        <div key={type.url.substr(31)}
                             className={s.dropdownItem + ' ' + type.name}
                             onClick={e => onOptionClick(e)}>
                            {type.name}
                        </div>)
                }
            </div>
        }
    </div>
}
