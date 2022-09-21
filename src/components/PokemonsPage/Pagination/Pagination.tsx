import {FC} from "react";
import s from "./Pagination.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {actions, requestPokemonsGeneralInfo} from "../../../Redux/pokemons/pokemons-reducer";

export const Pagination: FC = () => {

    const prevPageUrl = useSelector((state: AppStateType) => state.pokemons.prevPage)
    const nextPageUrl = useSelector((state: AppStateType) => state.pokemons.nextPage)

    const dispatch = useDispatch()

    const onPrevClick = (prevPageUrl: string | null) => {
        // @ts-ignore
        prevPageUrl && dispatch(requestPokemonsGeneralInfo(prevPageUrl))
    }

    const onNextClick = (nextPageUrl: string | null) => {
        // @ts-ignore
        nextPageUrl && dispatch(requestPokemonsGeneralInfo(nextPageUrl))
    }

    return <div className={s.paginationWrapper}>
        <button className={s.paginationButton}
                onClick={() => {
                    onPrevClick(prevPageUrl);
                    dispatch(actions.setCurrentType('Select Type...'));
                }}
                disabled={!prevPageUrl}>
            Prev
        </button>
        <button className={s.paginationButton}
                onClick={() => {
                    onNextClick(nextPageUrl);
                    dispatch(actions.setCurrentType('Select Type...'));
                }}
                disabled={!nextPageUrl}>
            Next
        </button>
    </div>
}